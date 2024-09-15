const express = require("express");
const app= express();
const PORT = 8001;
const {mongoDbConnect}= require("./connect")
const urlRoute = require("./routes/url");

mongoDbConnect("mongodb://localhost:27017/youtube-db")
.then(()=>console.log("mongodb connected"));
app.use(express.json());

app.use("/url", urlRoute);



app.listen(PORT, ()=>{console.log(`server started at port ${PORT}`)})