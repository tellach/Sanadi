//const userController=require('../controllers/userController');
import {askAssistance,acceptAsk,getAsks,cancelAsk} from "../Controllers/askController";
import {verifyToken} from "../utils/jwt.utils";


import express from 'express';
const UserRouter=express.Router();

UserRouter.post('/askAssistance',verifyToken,askAssistance);
UserRouter.put('/acceptAsk/:idUser',verifyToken,acceptAsk);
UserRouter.get('/getAsks',verifyToken,getAsks);
UserRouter.delete('/cancelAsk/:idUser',verifyToken,cancelAsk);
UserRouter.put('/confirmeAsk/:idUser',verifyToken,cancelAsk);

export default UserRouter;