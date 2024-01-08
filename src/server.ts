import express from "express"
import cors from "cors"
import { getAllHumans } from "./routes/getAllHumans"
import { deleteHumans } from "./routes/deleteHumans"
import { $createNewHuman } from "./routes/createNewHuman"



const server = express()
server.use(cors())
server.use(deleteHumans)
server.use(getAllHumans)
server.use($createNewHuman)

server.listen(3330,()=>{
    console.log('helloWord')
})