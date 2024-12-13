//this is named as server.js
import express from 'express';
import connectDb from './connectDb.js';

let app=express();
app.listen(8000,() => {  /* creating the server through express */
  console.log("server is running on port 8000")
})
connectDb()