import AskeSchema from "../Models/Ask";
import mongoose from 'mongoose'

import * as bcrypt from "bcrypt";
import {generateTokenForUser,privatekey} from "../utils/jwt.utils"
import * as jwt from "jsonwebtoken";

const Ask=mongoose.model("Ask",AskeSchema);

const askAssistance = (req,res)=>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            const handicapeEmail=req.body.handicapeEmail;
            const state=req.body.state;
            const region=req.body.region;
            const Date=req.body.Date;
            const newUser = new Ask({
                handicapeEmail:handicapeEmail,
                state: state,
                region: region,
                Date: Date,
                AssistantEmail: null,
                        });

            newUser.save((err, user) => {
                if (err) {
                    res.send(err)

                }
                res.json(user)

            })
        }
    })
}
const askAssistance1 = (req,res)=>{

            const handicapeEmail=req.body.handicapeEmail;
            const state=req.body.state;
            const region=req.body.region;
            const Date=req.body.Date;
            const newUser = new Ask({
                handicapeEmail:handicapeEmail,
                state: state,
                region: region,
                Date: Date,
                AssistantEmail: null,
                        });

            newUser.save((err, user) => {
                if (err) {
                    res.send(err)

                }
                res.json(user)

            })
}
const getAsks = (req,res) =>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            const regionHandicape = req.body.regionHandicape
            const regionAssistant = req.body.regionAssistant
            if(regionHandicape==regionAssistant){
                Ask.find({AssistantEmail:null},(err,ask)=>{
                    if(err) res.send(err);
                    res.json(ask);
                })
            }
            else
            {
                res.json()
            }


        }
    })
}
const getAsksActif = (req,res) =>{

            const handicapeEmail = req.body.handicapeEmail
                Ask.find({AssistantEmail:null,handicapeEmail:handicapeEmail},(err,ask)=>{
                    if(err) res.send(err);
                    res.json(ask);
                })

}


const acceptAsk=(req,res) =>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            Ask.findOneAndUpdate(

                {_id:req.params.idUser},
                req.body,
                {new:true},
                (err,user)=>{
                    if(err)res.send(err)
                    res.json(user)
                })
        }
    })
}
const cancelAsk=(req,res) =>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            Ask.remove(
                {_id:req.params.idUser},
                (err)=>{
                    if(err){
                        res.send(err)
                    }
                    res.json({message:'delete successfully'});
                }
            )
        }
    })
}
const confirmeAsk=(req,res) =>{
    jwt.verify(req.token,privatekey(), (err,authData)=>{
        if(err) res.sendStatus(403);
        else{
            Ask.findOneAndUpdate(

                {_id:req.params.idUser},
                req.body,
                {new:true},
                (err,user)=>{
                    if(err)res.send(err)
                    res.json(user)
                })
        }
    })
}



export {acceptAsk,getAsks,askAssistance,cancelAsk,confirmeAsk,askAssistance1,getAsksActif}