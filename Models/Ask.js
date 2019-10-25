import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const AskSchema=new Schema({
    handicapeEmail: {
        type:String,
        require:'handicape is required'
    },
    state: {
        type:String,
        require:'state is required'
    },
    region: {
        type:String,
        require:'region is required',
    },
    Date: {
        type:Date,
        require:'Date is required',
    },
    AssistantEmail: {
        type:String,
    },

})

export default AskSchema;
