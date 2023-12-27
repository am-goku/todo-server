import { Users } from "../models/userSchema.js"

const findUser = {
  withEmail: (email) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ email: email }).select("-password")
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  withID: (id) => {
    return new Promise((resolve, reject) => {
      Users.findOne({ _id: id }).select("-password")
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};


export default findUser;