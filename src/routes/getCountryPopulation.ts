import { Router,Request,Response } from "express";
import { abreviationList } from "../data/countryList";
import { getCountryName } from "../functions/getCountryName";
import { databaseConnection } from "../functions/databaseConnection";

export const getContryPopulation = Router()

getContryPopulation.get("/country/:countryabreviation", async(req:Request,res:Response)=>{
    const humanCountryAbreviation = req.params.countryabreviation
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(humanCountryAbreviation);
    const countryName = getCountryName(humanCountryAbreviation)
    if(!countryl){
        res.status(404).json({code:404 ,message:'nation not available'})
    }else{
        if(humanCountryAbreviation == 'all'){
            const contryPopulation = await databaseConnection.human.count()
            res.status(200).json({qnt:contryPopulation,nation:countryName})
            return databaseConnection.$disconnect()
        }else{
            const contryPopulation = await databaseConnection.human.count({
                where:{
                    humanLocation:{
                        some:{
                            humanCountry:countryName
                        }
                    }
                    },
                })
                res.status(200).json({code:200,qnt:contryPopulation,nation:countryName})
                return databaseConnection.$disconnect()
            }
        }
       
    }
)


