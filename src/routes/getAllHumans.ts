import { Router,Request,Response } from "express";
import { abreviationList } from "../data/countryList";
import { getCountryName } from "../functions/getCountryName";
import { databaseConnection } from "../functions/databaseConnection";

export const getAllHumans = Router()

getAllHumans.get("/humans/:countryabreviations", async(req:Request,res:Response)=>{
    const humanCountryAbreviation = req.params.countryabreviations
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(humanCountryAbreviation);
    const countryName = getCountryName(humanCountryAbreviation)
    if(!countryl){
        res.status(404).json({code:404 ,message:'nation not available'})
    }else{
        const humans = await databaseConnection.human.findMany({
            where:{
                humanLocation:{
                    some:{
                        humanCountry:countryName
                    }
                }
                },
                include:{
                    humanLogin:true,
                    humanLocation:true
                }
            })
            res.status(201).json({code:201,qnt:humans.length,nation:countryName,humansList:humans})
            return databaseConnection.$disconnect()
        }
    }
)
getAllHumans.get("/", async(req:Request,res:Response)=>{
    const allAbreviationList = abreviationList
    const humans = await databaseConnection.human.findMany({
        include:{
            humanLogin:true,
            humanLocation:true
        }
    })
    res.status(200).json({code:200,qnt:humans.length,nations:allAbreviationList,humansList:humans})
    return databaseConnection.$disconnect()
})