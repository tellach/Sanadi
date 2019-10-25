import mongoose from 'mongoose'

const  Schema = mongoose.Schema;

export const LocationSchema=new Schema({
    x: {
        type:Number,
        require:'x is required'
    },
    y: {
        type:Number,
        require:'y is required'
    },
    type: {
        type:String,
        require:'type is required',
    },

    rating: {
        type:String,
        require:'rating is required'

    },
    reviews: {
        type:[],
    },
    
})

export default LocationSchema;
