const express = require('express');

const port = 80;

const app = express();

app.listen(port, (error)=>{
    if(error){
        return console.error(error);
    }
    console.log("server listening on port " , port);
});
