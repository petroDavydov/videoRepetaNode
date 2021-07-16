const express = require('express');

const app = express();

app.use("*", (req,res)=>{
	console.log(`Had broweser request`);
	res.send("<h1>Answer fo request by HTML</h1>")
})

const listener = app.listen(5003, ()=>{
	console.log(`Web serwer run on ${listener.address().port}`);
})