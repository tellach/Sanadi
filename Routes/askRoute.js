//const userController=require('../controllers/userController');
import {askAssistance,acceptAsk,getAsks,cancelAsk,askAssistance1,getAsksActif} from "../Controllers/askController";
import {verifyToken} from "../utils/jwt.utils";


import express from 'express';
const UserRouter=express.Router();

UserRouter.post('/askAssistance',verifyToken,askAssistance);
UserRouter.post('/askAssistance1',askAssistance1);
UserRouter.put('/acceptAsk/:idUser',verifyToken,acceptAsk);
UserRouter.post('/getAsks',verifyToken,getAsks);
UserRouter.delete('/cancelAsk/:idUser',verifyToken,cancelAsk);
UserRouter.put('/confirmeAsk/:idUser',verifyToken,cancelAsk);
UserRouter.get('/getAsk',getAsksActif);

export default UserRouter;