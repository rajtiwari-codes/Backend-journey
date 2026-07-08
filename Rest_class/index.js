//s-1
const express=require("express");
const path=require("path");
const app=express();
const port=8080;

//S-6 create unique id for indivdual post
const{v4: uuidv4}=require("uuid");                                   //version-4 for creting id and thatfunction which create there name is uuidv4
const methodOverride = require("method-override");                     //S-7 for overding any ppost into patch/delete

//S-2 to accept all type of resonse -post,get,etc
app.use(express.urlencoded({ extended :true}));                      //to accept post req beca in post req we need parsing so this is middleware
app.use(methodOverride("_method"));//S-7
app.set("view engine","ejs");                                           //set setting  give all templte of ejs[embeded js templte]
app.set("views",path.join(__dirname,"views"));                             //used if you can call from outside the function so thsy gave error so we use this whwre views is folder at that path
app.use(express.static(path.join(__dirname,"public")));

//S-3 we need database for storing or sending,editing data so initially i will strore data here in form of arry
let posts=[                                                           //use let not const becasue we need edit or delete data 
    {
        id:uuidv4(),//S-5
        username:"raj tiwari",
        content:"I explore code initially !"
    },
    {
        id:uuidv4(),//S-5
        username:"SAM",
        content:"He is a man who can think what other think about me"
    },
    {
        id:uuidv4(),//S-5
        username:"kash",
        content:"He are explore and reading all the person which are they attrcted"
    },
];

//S-2
app.get("/posts",(req,res)=>{                                         //to accet response at this location
    res.render("index.ejs",{posts});                                    //use render to shere any folderand there name
});

//s-4 to add new post=>2 step process-a)acces info from user  by taking input and b)when form submit req go to new post abd add in database=arry;
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;                                  //acces information which user can submit
    let id=uuidv4();//s-6
    posts.push({id,username,content});                                   //that info push in to your database=arry
    console.log("req.body");                                               //in post rew info come through user in body but in get info come in form of parameter
    res.redirect("/posts");                                                  //use rediesct go to home page url direcly
});                                                                            //and after submision new post a new buuto can apperar for new pot adding 
    
//S-5 to acces any post using there id
app.get("/posts/:id",(req,res)=>{                                      //take req using theres id
    let {id}=req.params;                                                  //acess id from user
    let post=posts.find((p)=> id === p.id);                                 //that id find in array if they see
    res.render("show.ejs",{post});                                            //if that post mil toh this folder me chal jaye at that folder we can write info about that id
});

//S-7 patch opsertion are applied-->to edit any content
app.patch("/posts/:id",(req,res)=>{                                    //how to edit using/knowing there id
    let {id}=req.params;                                                 //that id access
    let newContent= req.body.content;                                       //id ke body e andar ka content store in new var
    let post = posts.find((p)=>id === p.id);                                  //finf that id ka posts
    post.content = newContent;                                                   //that post store in new content
    console.log(post);
    res.redirect("/posts");
});                                                                                   //till we will get id and find thatt content now,after find that content we have to send request for edit
app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

//S-8 delete post
app.delete("/posts/:id",(req,res)=>{                                     //id get req
    let {id} =req.params;                                                  //that id access
    posts=posts.filter((p)=> id !== p.id);                                   //user id when not equal post id??jisko delete karna hai usse chodkarsab ko laag kardo
    res.redirect("/posts");
});

//s-1 server setup
app.listen(port,()=>{
    console.log(`app is listening ${port}`);
});