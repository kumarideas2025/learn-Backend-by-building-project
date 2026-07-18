import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app =  express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
credentials: true
}))

//get data from json with limit.so no to server crash . that called json body
app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended: true,limit: "10k"}))

//for public asset
app.use(express.static("public"))
app.use(cookieParser())
export{app}
