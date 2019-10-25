//const userController=require('../controllers/userController');
import {addUser, getUser, deleteUser1,deleteUser2, updateUser1,updateUser2, login} from "../Controllers/userController";
import {verifyToken} from "../utils/jwt.utils";


import express from 'express';
const UserRouter=express.Router();

UserRouter.post('/register',addUser);
UserRouter.post('/login',login);
UserRouter.get('/',getUser);
UserRouter.delete('/handi/:idUser',verifyToken,deleteUser1);
UserRouter.put('/handi/:idUser',verifyToken,updateUser1);
UserRouter.delete('/Assis/:idUser',verifyToken,deleteUser2);
UserRouter.put('/Assis/:idUser',verifyToken,updateUser2);


export default UserRouter;