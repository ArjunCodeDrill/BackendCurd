import userModel from '../Database/model/UserSchema.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
const userSignUP = async (req, res) => {
    try {

        const { name, email, contact, password } = req.body;

        if (!email || !password || !name) {
            return res.json({ message: "please fill the field" }).status(400)

        }


        if (email) {
            const existingUser = await userModel.findOne({
                email: new RegExp(email, 'i'),
                roles: ["USER"],
                isDeleted: false,
            });

            if (existingUser) {
                return res.json({ message: "User already exists" }).status(400)

            }
        }

        const hashPassword = await bcrypt.hash(password, await bcrypt.genSalt())
        const user = await new userModel({ email: email, contact: contact, name: name, roles: ["USER"], password: hashPassword, isActive: true }).save()
        const SECRET = process.env.SECRET_KEY;
        const signOptions = { expiresIn: '59m' };


        const hash = jwt.sign({ name, email, contact, id: user?._id }, SECRET, signOptions);

        return res.json({ message: "User has been successfully created", data: hash }).status(200)


    } catch (err) {
        console.log(err);

    }
}

export default userSignUP;