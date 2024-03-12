import itemModel from "../Database/model/ItemSchema.js";

const getItems = async (req, res) => {
    const { name, price } = req.body;
    console.log("Sdsdafs")
    const item = await itemModel.find({})

    return res.json({ message: "Item get successfully", data: item }).status(200)
}

export default getItems;