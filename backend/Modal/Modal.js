const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModal = new Schema({
    name:{type:String , required :true},
    email:{type:String , required:true},
    password:{type:String , required:true}
},{timestamps:true})

const User = mongoose.model("Users" , UserModal)
module.exports = User;