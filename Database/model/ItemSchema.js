import { Schema, model } from 'mongoose';


const itemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        }

    },
    {
        timestamps: true,
    },
);

const itemModel = model('item', itemSchema);

export default itemModel;
