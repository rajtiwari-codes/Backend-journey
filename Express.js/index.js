const express=require("express");
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log(`app is listening for incoming requests ${port}`);
});

//m-1
// app.use((req,res)=>{      //all the requst ko listen karta hai==>(app.use)
//     console.log("request receive");
//     res.send("hlo Raj this is used to send response by user alreday we will study using hopscoth in this we can said array,obj,html,strng,num");
// }); //res.send use to send requestby user using hoppscoths

//m-2
app.get("/",(req,res)=>{
    res.send("i am cahnging path");
});
app.get("/apple",(req,res)=>{
    res.send("tou call apple page");
});
app.get("/orange",(req,res)=>{
    res.send("tou call orange path");
});

app.post("/post",(req,res)=>{
    res.send("tou call post path");
});
app.get((req,res)=>{
    res.status(404).send("that page dosnt existe");
});

//path parameter=>www.google.com/apple/etc after slach express assume onject we dint want write everything so 

// app.get("/:username",(req,res)=>{//username behave object whwtevervyou search after slash
//     let {username}=req.params; //that req of paramter can stit in user name and (req.params is predefined synatx)
//     res.send(`welecome bro and your serach is ${username}"`);//what we serch we can print same princilpe workd FB,INSTAGRAM  search engine
// });



//for query stringgs
app.get("/search",(req,res)=>{
    let {q}=req.query;
    // if (!q){
    //     req.send("no serch found");
    // }
    res.send(`your query search is ${q}`);
});