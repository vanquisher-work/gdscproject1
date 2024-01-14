const mongoose=require("mongoose");
const validator=require("validator");

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

// const collection=new mongoose.model("Collection1",LogInSchema);

// module.exports=collection;


// const userSchema = mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         minLength:3
//     },
//     email:{
//         type:String,
//         required:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Invalid email id")
//             }
//         }

//     },

//     phone:{
//         type:Number,
//         required:true,
//         min:10
//     },
//     message:{
//         type:String,
//         required:true,
//         minLength:3
//     },
//     data:{
//         type:Date,
//         default:Date.now,
        
//     }


// })

//we need a collection
const User=mongoose.model("Collection1",LogInSchema);

module.exports=User;