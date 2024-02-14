import User from "../modal/user-modal.js";


export const SignUp = async (request, response) => {
    const userMatch = await User.findOne({ email: request.body.email })
    if (!userMatch){
        try {
            //     // const hashedPassword = await bcrypt.hash(request.body.password, 10)
            // const user = request.body
            const newUser = new User({
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email: request.body.email,
                password: request.body.password,
                image: request.file.filename,
            })
            await newUser.save()
            response.status(200).json({ msg: 'User Sign Up Successfully' })
        } catch (error) {
            response.status(500).json(error)
        }
    }
    else{
        return response.status(400).json({msg:"user email already exist"})
    }

    }
  

export const Login = async (request, response) => {
    const userMatch = await User.findOne({ email: request.body.email })
    if (!userMatch) {
        return response.status(200).json({ msg: 'User Email not found', user: userMatch })
    }
    try {
        if (request.body.password == userMatch.password) {
            return response.status(200).json(
                {
                    msg: "User Login Successfully",
                    userData: userMatch
                }
            )
        } else {
            return response.status(200).json({
                msg: 'Password not matched'
            })
        }
    } catch (error) {
        response.status(500).json(error)
    }
}




export const getAllUser = async (request, response) => {
    let allUser;
    try {
        allUser = await User.find({})
        response.status(200).json(allUser)
    } catch (error) {
        response.status(500).json(error)
    }
}