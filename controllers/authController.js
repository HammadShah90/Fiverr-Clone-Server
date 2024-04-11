import User from "../modals/user.model.js";

export const registration = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      country: req.body.country,
    });

    await newUser.save();
    res.status(201).json("User has been created");
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};


export const login = async (req, res, next) => {
  try {
  } catch (error) {}
};
export const logout = async (req, res, next) => {
  try {
  } catch (error) {}
};
