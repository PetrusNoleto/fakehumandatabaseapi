import express from "express"
import cors from "cors"
import { routeslist } from "./routes/routeList"
import { serverPortNumber } from "./data/importenviromentvariables"

const api = express()
api.use(cors())
api.use(routeslist)

api.listen(serverPortNumber,()=>{
    console.log('online')
})