const express = require("express");
const router = new express.Router

const messageSchema = require ("../models/schema")

router.post("/message",async(req,res)=>{
    try{
        const data = new messageSchema(req.body)
        console.log(req.body)
        const insertData = await data.save()
        res.status(201).send(insertData)
    }catch(error){
        res.status(400).send(error)
    }
})
router.get("/find",async(req,res)=>{
    try{
        const findData = await messageSchema.find({})
        res.status(200).send(findData)
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router