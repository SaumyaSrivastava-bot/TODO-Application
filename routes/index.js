// const {model}=require("mongoose")
const router=require("express").Router()
const Todo =require("../models/Todo");
router.get("/",async(req,res)=>{
    const allTodo=await Todo.find();
    //res.send("Welcome to the home page!")
    res.render("index",{todofile:allTodo})
})
module.exports=router;
