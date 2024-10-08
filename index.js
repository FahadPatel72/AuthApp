const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 6000;

//cookies parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const usersRoutes = require("./routes/auth");

app.use("/api/v1",usersRoutes);

app.listen(PORT, ()=>{
    console.log(`App Started Successfull at ${PORT}`);
})


const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send("<h1>App is Started</h1>");
})

