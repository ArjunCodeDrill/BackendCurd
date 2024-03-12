import { Schema, model } from 'mongoose';


const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        contact: {
            number: {
                type: String,
            },
            country_code: {
                type: String,
            },
        },

        password: {
            type: String,
        },
        profile_picture: {
            type: String,
        },
        roles: {
            type: [String],
            required: true,
        },
        isActive: {
            type: Boolean,
            default: false,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
            required: true,
        },

    },
    {
        timestamps: true,
    },
);

const userModel = model('user', userSchema);

export default userModel;
