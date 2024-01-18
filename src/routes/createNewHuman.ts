import axios from "axios";
import { Router,Request,Response } from "express";
import { resultsProps } from "../types/humanTypes";
import { setNewHumanData } from "../functions/setNewHumanData";
import * as dotenv from "dotenv"
import { abreviationList }  from "../data/countryList";
import { getCountryName } from "../functions/getCountryName";
import { apiPatameters, apiUrl } from "../data/importenviromentvariables";

dotenv.config()

export const $createNewHuman = Router()
const humansQnt = 100
$createNewHuman.get('/newhuman/:countryabreviation' , async(req:Request,res:Response)=>{
    const humanCountryAbreviation = req.params.countryabreviation
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(humanCountryAbreviation);
    const countryName = getCountryName(humanCountryAbreviation)
    if(!countryl){
        res.status(404).json({code:404 ,message:'nation not available'})
    }else{
        try {
            const getNewHumanData = await axios.get(`${apiUrl}${humanCountryAbreviation}${apiPatameters}results=${humansQnt}`)
            const data = await getNewHumanData.data as resultsProps
            const setnewHuman =  setNewHumanData(data)
            res.status(201).json({code:201,qnt:data.results.length, humanCountry:countryName, humansCreated:setnewHuman})  
            return
        } catch (error) {
            res.status(404).json({code:404, message:error})
            return
        }
    }
})