const express =require("express");
const app=express();
const path =require("path");
const hbs=require("hbs");
require("./db/conn");
const User=require("./models/usermessage");
const port=process.env.PORT || 3000;



//setting the path
const staticpath=path.join(__dirname,"../public");

const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");


// console.log(path.join(__dirname,"../public"));

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));



app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath));
app.use(express.json())
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

// routing
app.get("/",(req,res)=>{

  

res.render("index");
})

// app.get("/contact",(req,res)=>{
//     res.render("contact");
//     })

app.get("/generic",(req,res)=>{
  res.render("generic");
  })

  app.get("/bot",(req,res)=>{
    res.render("bot");
    })
 app.get("/gallery",(req,res)=>{
     res.render("gallery");
     })

     app.get("/vreminder",(req,res)=>{
      res.render("vreminder");
      }) 
      app.get("/centres",(req,res)=>{
        res.render("centres");
        }) 
        app.get("/calorimeter",(req,res)=>{
          res.render("calorimeter");
          }) 
          app.get("/chatbot",(req,res)=>{
            res.render("chatbot");
            }) 
          app.get("/blogs",(req,res)=>{
            res.render("blogs");
            }) 
           
            app.get("/card",(req,res)=>{
              res.render("card");
              }) 
                


        app.get("/login",(req,res)=>{
          res.render("login");
          }) 
          app.get("/signup",(req,res)=>{
            res.render("signup");
            }) 
            // app.get("/logout",(req,res)=>{
            //   res.render("logout");
            //   }) 

            app.post("/login",async(req,res)=>{
    
              try {
                  const check =await User.findOne({name:req.body.name})
                   if(check.name===req.body.name){
                      res.render("logout")
                   }
                   else{
                      res.send("wrong password")
                   }
              
              } catch (error) {
                  res.send("wrong details")
              }
              
                  
              })

              app.post("/signup",async(req,res)=>{
    
                const data={
                    name:req.body.name,
                    password:req.body.password
                }
            await User.insertMany([data])
            res.render("logout");
            })

            app.get("/logout",(req,res)=>{
              res.render("logout");
              })
// app.post("/contact",async(req,res)=>{
//       try{
//     //    res.send(req.body);
//           const userData=new User(req.body);
//          await userData.save();
//           res.status(201).render("index");

//       }catch(error){
//       res.status(500).send(error);

//         }


// })

// server create
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});