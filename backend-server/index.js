const fs = require("fs")
const express = require("express")
const app = express()

app.use(express.json())

app.get("api/notes", async(req,res) =>{
    try {
        let data = fs.readFileSync("db.json", "utf8")
        res.send({msg:"Note Received", data:JSON.parse(data)})
    } catch (error) {
        
    }
})