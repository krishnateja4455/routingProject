const Router=require("router");
const router=Router();


router.get("/users",(req,res)=>{
  res.send("users Page");
})


module.exports=router;
