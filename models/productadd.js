const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { error } = require('npmlog')

const ProductSchema = new Schema({
   price:{
        type: String,
        required:[true,'Please collect Product']
    },
    name:{
        type: String,
        required:[true,'Please provide productname']
    },
    image:{
        type: String,
        required:[true,'Please select productimages ']
    }
})