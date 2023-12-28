import { Users } from "../models/userSchema.js";
import { comparePassword, hashPassword } from "../services/bcrypt.js";
import findUser from "../services/user-finder.js";
import token from "../services/jwt.js";

//@desc     Create new user
//@route    /api/user/create-account
export const newUserHelper = ({ name, email, image, password }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userExist = await findUser.withEmail(email);
      if (userExist) {
        reject({ status: 409, message: "Email already registered." });
      }

      hashPassword(password)
        .then(async (hash) => {
          const newUser = new Users({
            name: name,
            email: email,
            profilePic: image,
            password: hash,
          });

          newUser.save({ new: true }).then((res) => {
            resolve(res);
          });
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

//@desc     Login user
//@route    /api/user/login-user
export const loginHelper = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    Users.findOne({ email: email })
      .then((user) => {
        if (user) {
          comparePassword(password, user?.password).then((response) => {
            if (response) {
              token.getTokens(user?._id).then((tokens) => {
                resolve({ user, tokens });
              });
            } else {
              reject({ status: 403, message: "Invalid email or password." });
            }
          });
        } else {
          reject({ status: 403, message: "Invalid email or password." });
        }
      })
      .catch((err) => {
        reject({ status: 500, message: "Database error.", err });
      });
  });
};