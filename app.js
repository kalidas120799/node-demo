const express = require("express")
const morgan = require("morgan")
const port = 1000 || process.env.PORT
var app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(morgan("dev"))

app.get("/test",(req,res)=>{
    return res.send("okay")
})

app.listen(port,()=>{console.log(`App Running on http://localhost:${port}`)})