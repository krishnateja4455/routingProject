const Router=require("router");
const router=Router();

router.get("/products",(req,res)=>{
       res.send("Products Page");
});

module.exports=router;