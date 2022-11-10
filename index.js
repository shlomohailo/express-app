const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.get('/',(req,res)=>{
res.send('hello user')
})
app.get("/home",(req,res)=>{
    res.send('hello home')
})
app.get("/:id",(req,res)=>{
    res.send(`the id is ${req.params.id}`)
})

app.post("/",(req,res)=>{
 const data= req.body
 res.send(data)
})
app.listen(port, () => {
console.log(`listen port ${port}`)
})
