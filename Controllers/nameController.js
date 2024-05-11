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

export const user = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Notes fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in fetching notes",
    });
  }
};
export default { notes, user };
