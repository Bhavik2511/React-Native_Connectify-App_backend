const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Userdataschema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    profilepic:{
        type: String,
        default: '',
    },
    posts:{
        type: Array,
        default: []
    },
    followers:{
        type: Array,
        default: []
    },
    following:{
        type: Array,
        default: []
    },
    description:{
        type: String,
        default: ''
    },
});

// password hashing 

Userdataschema.pre('save', async function(next){
    const user = this
    console.log("befor hasing password", user.password)
    if(!user.isModified('password')){
        return next()
    }
    user.password = await bcrypt.hash(user.password, 12)
    console.log("after hasing password", user.password);
    next()
})

mongoose.model("User", Userdataschema);