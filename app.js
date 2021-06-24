'use strict'

import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    const {nombre} = req.query;
    if(nombre){
        res.status(200).send(`<h1>Hola ${nombre}!</h1>`)
    }
    if(!nombre){
        res.status(200).send(`<h1>Hola desconocido!</h1>`)
    }    
})

app.listen(3000,()=>console.log('listening from at port 3000'));