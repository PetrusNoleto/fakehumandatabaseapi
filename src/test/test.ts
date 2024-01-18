import axios from "axios";
import { apiPatameters, apiUrl, serverPortNumber, getPrismaDatabaseUrl } from "../data/importenviromentvariables";
import { resultsProps } from "../types/humanTypes";
import { databaseConnection } from "../functions/databaseConnection";

const prismaDatabase = getPrismaDatabaseUrl;
const environmentVariablesList = [{getPrismaDatabaseUrl:prismaDatabase},{apiUrl:apiUrl},{apiPatameters:apiPatameters},{serverPortNumber:serverPortNumber}]

const variables = ()=>{
    let allDefined = true;
    environmentVariablesList.forEach(variable => {
        for (let key in variable) {
            let value = variable[key as keyof typeof variable];
            if(value === null || value === undefined || value === ""){
                console.log(`error ${85690} variable ${key} not defined`)
                allDefined = false;
                break;
            }
        }
        if (!allDefined) {
            return process.exit(1) 
        }
    });
    if (allDefined) {
        return console.log("all environment variables defined")
    }
}
const apiConnection = async()=>{
    const humanCountryAbreviation = "us"
    const humansQnt = 1
    try{
        const getNewHumanData = await axios.get(`${apiUrl}${humanCountryAbreviation}${apiPatameters}results=${humansQnt}`)
        const data = await getNewHumanData.data as resultsProps
        if(data.results){
            console.log("test api sucess")
        }
        return (data)
    }catch(error){
        console.log(`error ${79830} external api connection failed`)
        process.exit(1)
    }
}
const testDatabaseConnection = async()=>{
    try{
        const database = await databaseConnection.human.findMany()
        if(!database){
            return (console.log(`error {48530} database table not find`), process.exit(1))
            
         }else{
             return console.log("database connection sucess")  
         }
    }
    catch{
        return (console.log(`error {48960} database connection failed`),process.exit(1))  
    }
}
const test = async()=>{
    variables()
    await apiConnection()
    await testDatabaseConnection()
}
test()