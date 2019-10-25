import LocationSchema from './../Models/Location'
import {genreateTokenForUser,privatekey} from '../utils/jwt.utils'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

const Location=mongoose.model("Location",LocationSchema);




const getLocations = (req,res) =>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            Location.find({},(err,todoliste)=>{
                if(err) res.send(err);
                res.json(todoliste);
            })
        }
    })
}





export {getLocations}
