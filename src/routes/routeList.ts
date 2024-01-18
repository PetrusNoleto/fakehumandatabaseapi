import { $createNewHuman } from "./createNewHuman";
import { deleteHumans } from "./deleteHumans";
import { getAllHumans } from "./getAllHumans";
import { getContryPopulation } from "./getCountryPopulation";

export const routeslist = [deleteHumans, getAllHumans,$createNewHuman,getContryPopulation]