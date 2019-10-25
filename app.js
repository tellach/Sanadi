//============IMPORTS=================//

import express from "express"
import body_parser from "body-parser"
import mongoose from "mongoose"
import userRoute from "./Routes/userRoute";
import locationRoute from "./Routes/locationRoute";

//===================================//

//============CONF
//
//
//
//
//
//
//
//
//
//
//
// IGS=================//
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/sanadi", { useNewUrlParser: true });

app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true}));
app.use('/user',userRoute);
app.use('/location',locationRoute);

//============SERVER=================//

app.listen(3000, ()=>{
    console.log("server listening at port 3000...")
});

//===================================//