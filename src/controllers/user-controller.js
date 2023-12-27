import { loginHelper, newUserHelper } from "../helpers/user-helper.js";
import token from "../services/jwt.js";

//@desc     Create new user
//@route    /api/user/create-account
export const createUser = (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
      password: req.body.password,
    };

    newUserHelper(data)
      .then(async (response) => {
        const tokens = await token.getTokens(response._id);
        res.status(200).send({ user: response, tokens });
      })
      .catch((err) => {
        res.status(err.status || 500).send(err);
      });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};

//@desc     Login user
//@route    /api/user/login-user
export const loginUser = (req, res) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    loginHelper(data)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(err.status || 500).send(err);
      });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
