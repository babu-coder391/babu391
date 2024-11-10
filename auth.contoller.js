import user from "../models/user.model.js";


export const signup = async (req,res)=>{
   try {
    const {username,fullname,email,password} = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(email)){
        res.status(400).json({error: "Invalid email format"})
    }
    const existingEmail= await user.findOne({email : email})
    const existingUsername = await user.findOne({username : username})
    if(existingEmail || existingUsername){
        return res.status(400).json({error: "this email already exists"})
    }
    if(password.length < 6 ){
        return res.status(400).json({error: "password must have 6 character length"})
    }
    // hashing the password

    //123456 =cn39f3yffj2fu2yf2
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.password(password, salt);
    const newUser = new user({
        username,fullname,email,password: hashedPassword
    })
    if  (newUser) {
        await newUser.save();
        res.status(200).json({
            _id : newUser._id,
            username : newUser.username,
            fullname :newUser.fullname,
            email : newUser.email,
            followers :newUser.followers,
            following :newUser.following,
            profileImg :newUser.profileImg,
            coverImg :newUser.coverImg,
            bio :newUser.bio,
            link :newUser.link


        });

    }
    else {
        res.status(400).json({error : "inva;id user data"})
    };


    
   } catch (error) {
    console.log(`error in sign up controller ${error}`)
    res.status(500).json({
        error: "intenal server error"
    })
    
   }
}
export const login =  (req,res)=>{
    res.send("login contoller")
}
export const logout =  (req,res)=>{
    res.send("logout contoller")
}