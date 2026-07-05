//S-1
const express = require("express");//express which are package inherit in our system using require
const app=express();//store in appp
const port=8080;//por is like dockerto exchange info hence if anyone call 8080

//S-3 (b)middleware then post requst system can read
app.use(express.urlencoded({extended:true}));
app.use(express.json());//all the json dat can read 

//S-2 to accept request 
app.get("/register",(req,res)=>{//if we call through register tehn can accept here 
    let {user,password}=req.query;//we know in (.get) dat can go throgh query but in post data can go throgh request body
    res.send(`welcome rajj ${user}`);//through query dat can acces then whwtever you want t perform do it
});

//S-3handle post req 2 step process (a)makepost reequst route see down and (b)parse post requst data writ two line of code which we call middleware
app.post("/register",(req,res)=>{
    let {user,password}= req.body;
    res.send(`standard post rwsponse, welcome ${user}`);
});



//S-1 server can start
app.listen(port,()=>{   //if anyone call 8080 port can listen and whwtever you want o rin r do work you can do
    console.log(`app is listening ${port}`);
});