import express from "express"
import cros from 'cors'
import cookieParser from "cookie-parser"

const app=express()
app.use(cros({
    origin:process.env.CROS_ORIGIN,
    credentials:true
}))

// to accept json data
app.use(express.json({limit:"16kb"}))

// to accept data from url
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static("public"))

app.use(cookieParser())

export {app}