import { humanDatabaseProps } from "../types/humanTypes"
import { databaseConnection } from "./databaseConnection"

export const createNewHuman = async(human:humanDatabaseProps) =>{
    try {
        const createNew = await databaseConnection.human.create({
            data:{
                humanIndentification:human.humanIndentification,
                humanName:human.humanName,
                humanAge:human.humanAge,
                humanGender:human.humanGender,
                humanEmail:human.humanEmail,
                humanPhone:human.humanPhone,
                humanLocation:{
                    create:{
                        humanStreetName:human.humanLocation.humanStreetName,
                        humanStreetNumber:human.humanLocation.humanStreetNumber,
                        humanState:human.humanLocation.humanState,
                        humanCountry:human.humanLocation.humanCountry,
                        humanPostalCode:human.humanLocation.humanPostCode
                    } 
                },
                humanLogin:{
                    create:{
                        humanUserName:human.humanLogin.humanUserName,
                        humanPassword:human.humanLogin.humanPassword
                    }
                }
            }
        })
        return createNew
    } catch (error) {
        console.log(error)
    }
}