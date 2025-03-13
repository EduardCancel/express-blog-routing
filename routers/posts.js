const express = require('express');
const postRouter = express.Router();


// Index 

Router.get('/',(req, res)=>{
    res.send("Lista dei post")
})


