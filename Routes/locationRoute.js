//const userController=require('../controllers/userController');
import {getLocations} from "../Controllers/locationController";
import {verifyToken} from "../utils/jwt.utils";


import express from 'express';
const UserRouter=express.Router();

UserRouter.get('/',getLocations);



export default UserRouter;