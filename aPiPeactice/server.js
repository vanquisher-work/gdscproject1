const express=require('express');
const axios=require('axios');
const path =require("path");
const app=express();
const port =3000;

app.get('/',(req,res)=>{
    console.log(path.join(__dirname,'public'))
    return res.sendFile('public/index.html',{root:__dirname});
})

app.get('/searchword',async(req,res)=>{
res.send('Hello World');
console.log(req.params);

const options = {
  method: 'GET',
  url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
  params: {word: 'bright'},
  headers: {
    'X-RapidAPI-Key': 
    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


})

app.listen(port,(req,res)=>{
    console.log(`Example app listen on port ${port}`);
}) 