import nameModel from "../Models/nameModel.js";

export const notes = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) {
      return res.status(400).send({ message: "name is requird" });
    }
    if (!description) {
      return res.status(400).send({ message: "description is required" });
    }

    const note = await new nameModel({ name, description }).save();

    return res.status(500).send({
      success: true,
      message: "Name created successfully",
      note,
    });
  } catch (error) {
    console.log(error);
  }
};
export default notes;
