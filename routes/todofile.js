const router =require('express').Router()
const Todo=require("../models/Todo")

router.post("/add/todofile",(req,res)=>{
    const {todofile}=req.body;
    const newTodo=new Todo({todofile});
    newTodo
    .save()
    .then(()=>{
        console.log("Successfully added todo!");
        res.redirect("/");
    }
    )

    .catch((err)=>console.log(err));
    


    // console.log(todofile);
})
.get("/delete/todofile/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;
