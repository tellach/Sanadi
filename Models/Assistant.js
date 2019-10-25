import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const AssistantSchema=new Schema({
    firstName: {
        type:String,
        require:'nom is required'
    },
    familyName: {
        type:String,
        require:'prenom is required'
    },
    email: {
        type:String,
        require:'email is required',
        unique:true
    },
    dateOfBirth: {
        type:Date,
        require:'pseudo is required',
    },
    password: {
        type:String,
        require:'password is required'

    },
    phone: {
        type:Number,
        require:'phone is required'
    },
    point: {
        type:Number,
        require:'phone is required'
    },
    region:{
        type:String,
        require:'phone is required'
    }



})

export default AssistantSchema;
