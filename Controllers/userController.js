import HandicapeSchema from "../Models/Handicape";
import AssistantSchema from "../Models/Assistant";
import mongoose from 'mongoose'

import * as bcrypt from "bcrypt";
import {generateTokenForUser,privatekey} from "../utils/jwt.utils"
import * as jwt from "jsonwebtoken";




const Handicape=mongoose.model("Handicape",HandicapeSchema);
const Assistant=mongoose.model("Assistant",AssistantSchema);

const getUser = (req,res)=>{
    Assistant.find({},(err,users)=>{
        if(err) res.send(err);
        res.json(users)
    })
};

const addUser = (req,res)=>{

    const firstName=req.body.firstName;
    const familyName=req.body.familyName;
    const email=req.body.email;
    const password=req.body.password;
    const phone=req.body.phone;
    const dateOfBirth=req.body.dateOfBirth;
    const assistant=req.body.assistant;
    console.log(assistant)
    if(assistant=="true"){
        Assistant.findOne({email:email},(userFound)=>{
            if (!userFound) {
                bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                    if (err) res.send(err);
                    const newUser = new Assistant({
                        firstName:firstName,
                        familyName: familyName,
                        email: email,
                        password: bcryptedPassword,
                        phone: phone,
                        dateOfBirth:dateOfBirth,
                        point:0
                    });

                    newUser.save((err, user) => {
                        if (err) {
                            res.send(err)

                        }
                        res.json(user)


                    });
                });
            }
            else res.json({'error':'unable to verify user'})

        })
    }else{
        const disability=req.body.disability;

        Handicape.findOne({email:email},(userFound)=>{
            if (!userFound) {
                bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                    if (err) res.send(err);
                    const newUser = new Handicape({
                        firstName:firstName,
                        familyName: familyName,
                        email: email,
                        password: bcryptedPassword,
                        phone: phone,
                        dateOfBirth:dateOfBirth,
                        disability:disability
                    });

                    newUser.save((err, user) => {
                        if (err) {
                            res.send(err)

                        }
                        res.json(user)


                    });
                });
            }
            else res.json({'error':'unable to verify user'})

        })

    }

}
const deleteUser1 = (req,res)=>{
    jwt.verify(req.token,privatekey(),(err,authData)=>{
        if(err)res.sendStatus(403)
        else{
            Handicape.remove(
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

};
const deleteUser2 = (req,res)=>{
    jwt.verify(req.token,privatekey(),(err,authData)=>{
        if(err)res.sendStatus(403)
        else{
            Assistant.remove(
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

};

const updateUser1 = (req,res)=>{
    jwt.verify(req.token,privatekey(),(err,authData)=>{
        if(err)res.sendStatus(403)
        else{
            Handicape.findOneAndUpdate(

                {_id:req.params.idUser},
                req.body,
                {new:true},
                (err,user)=>{
                    if(err)res.send(err)
                    res.json(user)
                })
        }
    })

};const updateUser2 = (req,res)=>{
    jwt.verify(req.token,privatekey(),(err,authData)=>{
        if(err)res.sendStatus(403)
        else{
            Assistant.findOneAndUpdate(

                {_id:req.params.idUser},
                req.body,
                {new:true},
                (err,user)=>{
                    if(err)res.send(err)
                    res.json(user)
                })
        }
    })

};

const login=(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    const assistant=req.body.assistant

    if(assistant=="true"){
        Assistant.findOne({email:email}).then((userFound)=>{
            if (userFound)
            {
                bcrypt.compare(password,userFound.password, (errBcrypt,resBcrypt) => {
                    if (resBcrypt){

                        return res.status(200).json({
                            'userId':userFound.id,
                            'token':generateTokenForUser(userFound)
                        })
                    }else {
                        return res.status(403).json({'error':'invalide password'});

                    }
                })

            }else {
                return res.status(404).json({'error':'user not exist in DB'});

            }
        })
    }else {

        Handicape.findOne({email:email}).then((userFound)=>{
            if (userFound)
            {
                bcrypt.compare(password,userFound.password, (errBcrypt,resBcrypt) => {
                    if (resBcrypt){

                        return res.status(200).json({
                            'userId':userFound.id,
                            'token':generateTokenForUser(userFound)
                        })
                    }else {
                        return res.status(403).json({'error':'invalide password'});

                    }
                })

            }else {
                return res.status(404).json({'error':'user not exist in DB'});

            }
        })
    }

}

export {addUser,getUser,deleteUser1,deleteUser2,updateUser1,updateUser2,login}
