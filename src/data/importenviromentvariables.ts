import * as dotenv from "dotenv"

dotenv.config()

export const getPrismaDatabaseUrl = process.env.DATABASE_URL as string
export const apiUrl = process.env.API_URL as string
export const apiPatameters = process.env.API_PARAMETERS as string
export const serverPortNumber = process.env.API_SERVER as string