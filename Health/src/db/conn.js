const mongoose=require("mongoose");

//creating a database
mongoose.connect("mongodb://127.0.0.1:27017/Log")
.then(()=>{
    console.log("connection succesful");
}).catch((error)=>{
    console.log("No connection ");
})

//newdatabase
