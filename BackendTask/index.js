// 1.importing
const express = require("express") 

// 2.initialize 
const app = new express()
app.use(express.json());

const dbarray = [
    {studentid : "S01", name : "Alfin", course:"CS"},
    {studentid : "S02", name : "Neha", course:"Physics"},
];

// 3.api creation
app.post("/add",(req,res)=>{
    console.log(req.body)
    dbarray.push(req.body)
    res.send("data added");
})

app.get('/view',(req,res)=>{
    res.send(dbarray)
})

app.delete("/remove",(req,res)=>{
    dbarray.pop();
    res.send("deleted successfully")
})

// 4.port creation
app.listen(8000,()=>{
    console.log("port is running")
})