//============IMPORTS=================//

import express from "express"
import body_parser from "body-parser"

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

app.use(body_parser.json());
app.use(body_parser.urlencoded( {extended: true}));

//============SERVER=================//

app.listen(3000, ()=>{
    console.log("server listening at port 3000...")
});

//===================================//