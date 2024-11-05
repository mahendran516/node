const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
var username="mahe"
var password=123

app.use(express.json())
app.post("/login",function(req,res){
if(req.body.username === username && req.body.password == password)
{
    res.send(true)
}
else{
    res.send(false)
}
})
app.listen(5000,function(){
    console.log("server strat.....");
    
})