import { Router,Request,Response } from "express";
import { databaseConnection } from "../functions/databaseConnection";
import { getCountryName } from "../functions/getCountryName";
import { abreviationList } from "../data/countryList";

export const deleteHumans = Router()

deleteHumans.get("/delete", async(req:Request,res:Response)=>{
    const getAllHumans = await databaseConnection.human.count()
    if(getAllHumans == 0){
        res.status(404).json({code:404,message:"dont have humans for delete"})
    }else{
        const humans = await databaseConnection.human.deleteMany()
        res.status(200).json({code:200, message:(`${getAllHumans} humans deleted`)})
        return databaseConnection.$disconnect()
    }
})
deleteHumans.get("/delete/:country", async(req:Request,res:Response)=>{
    const countryAbreviation = req.params.country
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(countryAbreviation);
    const countryName = getCountryName(countryAbreviation)
    if(!countryl){
        res.status(404).json({code:404 ,message:'nation not available'})
    }else{   
        const getAllHumans = await databaseConnection.human.count({
            where:{
                humanLocation:{
                    some:{
                        humanCountry:countryName
                    }
                }
            }
        })
        if(getAllHumans == 0){
            res.status(404).json({code:404,message:"dont have humans for delete"})
            return databaseConnection.$disconnect()
        }else{
            const humans = await databaseConnection.human.deleteMany({
                where:{
                    humanLocation:{
                        some:{
                            humanCountry:countryName
                        }
                    }
                }
            })
            res.status(200).json({code:200, message:(`${getAllHumans} humans deleted`)})
            return databaseConnection.$disconnect()
        }   
}
}
)


