import { Router,Request,Response } from "express";
import { databaseConnection } from "../functions/databaseConnection";
import { getCountryName } from "../functions/getCountryName";
import { abreviationList } from "../data/countryList";

export const deleteHumans = Router()

deleteHumans.get("/delete", async(req:Request,res:Response)=>{
    console.log("rota /delete acessada")
    const getAllHumans = await databaseConnection.human.count()
    if(getAllHumans == 0){
        res.status(404).json(`não ha humanos para deletar`)
    }else{
        const humans = await databaseConnection.human.deleteMany()
        res.status(200).json(`${getAllHumans} humanos deletados`)
    }
})
deleteHumans.get("/delete/:country", async(req:Request,res:Response)=>{
    console.log("rota /delete acessada")
    const countryAbreviation = req.params.country
    const allAbreviationList = abreviationList
    const countryl = allAbreviationList.includes(countryAbreviation);
    const countryName = getCountryName(countryAbreviation)
    if(!countryl){
        res.status(404).json({code:404 ,message:'essa nacionalidade não esta disponivel'})
    }else{   
        const getAllHumans = await databaseConnection.human.count()
        if(getAllHumans == 0){
            res.status(404).json(`não ha humanos para deletar`)
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
            res.status(200).json(`${getAllHumans} humanos deletados`)
        }   
}
}
)


