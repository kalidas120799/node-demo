const express = require("express")
const morgan = require("morgan")
const path=require("path")
const port = 1000 || process.env.PORT
var app = express()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(morgan("dev"))

app.get("/",(req,res)=>{
    return res.send("okay")
})

app.listen(port,()=>{console.log(`App Running on http://localhost:${port}`)})