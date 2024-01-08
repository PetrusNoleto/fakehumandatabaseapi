import axios from "axios";
import { Router,Request,Response } from "express";
import { resultsProps } from "../types/humanTypes";
import { setNewHumanData } from "../functions/setNewHumanData";
import * as dotenv from "dotenv"
import { abreviationList }  from "../data/countryList";
import { getCountryName } from "../functions/getCountryName";

dotenv.config()

export const $createNewHuman = Router()

const $ApiUrl = process.env.API_URL as string
const $ApiParameters = process.env.API_PARAMETERS as string
const humansQnt = 100

$createNewHuman.get(`/newhuman/:countryabreviation`, async(req:Request,res:Response)=>{
    const humanCountryAbreviation = req.params.countryabreviation
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(humanCountryAbreviation);
    const countryName = getCountryName(humanCountryAbreviation)

    if(!countryl){
        res.json('não é possivel criar um humano com essa nacionalidade')
    }else{
        try {
            console.log(`rota /newhuman/${req.params.country} acessada`)
            const getNewHumanData = await axios.get(`${$ApiUrl}${humanCountryAbreviation}${$ApiParameters}results=${humansQnt}`)
            const data = await getNewHumanData.data as resultsProps
            const setnewHuman =  setNewHumanData(data)
            res.status(201).json({qnt:data.results.length, humanCountry:countryName, humansCreated:setnewHuman})  
        } catch (error) {
            console.log(error)
            res.json(`${req.params.country}`)
        }
    }
})