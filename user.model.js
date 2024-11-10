import mongoose from "mongoose";

const Userschema = mongoose.Schema({
    username:{
        type : String,
        require : true,
        unique :true
    },
    fullname:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true,
        unique :true
    },
    password:{
        type : String,
        require : true,
        minlngth : 6
    },
    followers :[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        default :[]
    }],
    following :[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "user",
        default :[]
    }],
    profileImg: {
        type: String,
        default:"",
    },
    coverImg: {
        type: String,
        default:"",
    },
    bio: {
        type: String,
        default:"",
    },
    link: {
        type: String,
        default:"",
    },
},{timestamps : true})

const User = mongoose.model("user",Userschema);

export default User;