const express=require('express');
const app=express();
const userRouter=require("./Routes/UsersRoutes");
const productRouter=require("./Routes/ProductRoutes");

app.use(userRouter);
app.use(productRouter);

const port=3535;


app.get("/",(req,res)=>{
  res.send("Home Page");
});

app.listen(port,()=>{
  console.log(`Server Running on Port ${port}`);
});
