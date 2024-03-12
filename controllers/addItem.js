import itemModel from "../Database/model/ItemSchema.js";

const addItem = async (req, res) => {
    const { name, price } = req.body;
    const item = await new itemModel({ name, price }).save()

    return res.json({ message: "Item saved successfully", data: item }).status(200)
}

export default addItem;