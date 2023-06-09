const express = require("express");
const app = express();

const todoRoutes = require("./router/todo");
require("dotenv").config();
const cors = require("cors");
app.use(cors())
const mongoConnect = require("./config/db"); 
mongoConnect();
app.use(express.json({extended: false}));
app.get("/", (req,res)=> res.send("server getup running..."));
app.use("/cards", todoRoutes);
const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});