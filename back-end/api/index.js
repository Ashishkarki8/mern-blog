//this is named as server.js
import express from 'express';

let app=express();
app.listen(8000,() => {  /* creating the server through express */
  console.log("server is running on port 8000")
})
