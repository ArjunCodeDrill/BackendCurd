import itemModel from "../Database/model/ItemSchema.js";

const updateItem = async (req, res) => {
    const { id, name, price } = req.body;
    const isItemExist = await itemModel.findOne({ _id: id });
    if (!isItemExist) {

        return res.json({ message: "Item not found" }).status(404)
    }
    const item = await itemModel.findByIdAndUpdate({ _id: id }, { name, price }, { new: true })

    return res.json({ message: "Item has been successfully updated", data: item }).status(200)
}

export default updateItem;