//1
const express=require("express");//express is packahge so we take it using require function
const app =express();

const path=require("path");//path require kiya    //2

const port=8080;

//3view directory
app.set("view engine","ejs");//set is function which can do view(template) naemed ejs also ejs is package but we dont require alag se because express inernally require kar lete hai
app.set("views",path.join(__dirname,"/views"));//set kiya conast path so kabhi errorna aye when we serch outside the outside the path
//1
app.get("/hello",(req,res)=>{
    res.send("hello");
});
//4 using ejs 
app.get("/",(req,res)=>{//when we call port 8080 they can get so here server can set
    res.render("home.ejs");//use render not send becasue when we want to share a bi fle of ejs then we use this
});
//5 passing data to ejs
app.get("/rolldice",(req,res)=>{//eg ludo games dice
    let diceval=Math.floor(Math.random()*6)+1;//we assume this data come from backend
    res.render("rolldice.ejs",{diceval });//here we ps two argument one for folder and second for to print that data in
});


//1
app.listen(port,()=>{
    console.log(`listening on port${port}`);
});
// 6 create absic template for instagram page 
// app.get("/ig/:username",(req,res)=>{//username behav as aobject
//     const followers=["adam","bob","raj","sam"];//8 for lopp in ejs
//     let {username}=req.params; //we can acess a username
//     res.render("instagram.ejs",{username,followers});//we pass username ,foloer in indtagram folder mei
// }); 

//for 9 we comment out 6 point 

app.get("/ig/:username",(req,res)=>{//serch using ig 
    let {username}=req.params;//acees username which are serach
    const instaData=require("./data.json");//data.json all da store in insta data
    const data = instaData[username];//accordng toyour serach your username instadat ke sata rakh diye jata hai and (store) kiya jata in=>data me
    if(data){
        res.render("instagram.ejs",{data,username});//if dat migae go instagram.ejs folder me and get data
    }else{
        res.render("error.ejs");
    }
});