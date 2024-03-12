import jwt from "jsonwebtoken";
import userModel from "../Database/model/UserSchema.js";
import bcrypt from "bcryptjs"

const userSign = async (req, res) => {
    const { password, email } = req.body;

    const user = await userModel.findOne({ email: new RegExp(email, "i") })
    if (!user) {
        return res.json({ message: "User not found", status: 404, }).status(404)
    }
    if (user) {
        const isPasswordCorrect = await bcrypt.compare(password, user?.password)
        const SECRET = process.env.SECRET_KEY
        const signOptions = { expiresIn: '1d' };
        const hash = jwt.sign({ email, id: user?._id }, SECRET, signOptions);
        if (!isPasswordCorrect) {
            return res.json({ message: "Invalid password" }).status(400)
        }
        return res.json({ message: "User has been successfully sign in", data: hash, status: 200 }).status(200)

    }


}

export default userSign;