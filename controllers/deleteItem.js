import itemModel from "../Database/model/ItemSchema.js";

const deletedItem = async (req, res) => {
    const { id } = req.body;
console.log(id)
    const isItemExist = await itemModel.findOne({ _id: id });
    console.log(isItemExist)
    if (!isItemExist) {

        return res.json({ message: "Item not found" }).status(404)
    }
    const item = await itemModel.findByIdAndDelete({ _id: id })

    return res.json({ message: "Item has been successfully deleted", data: item }).status(200)
}

export default deletedItem;