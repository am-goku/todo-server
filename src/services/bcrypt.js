import bcrypt from "bcrypt";

// setting salt rounds to hash password;
const saltRounds = 10;

export const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    try {
      bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
          throw new Error(err);
        }

        resolve(hashedPassword);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const comparePassword = (plainText, hashedPassword) => {
  return new Promise((resolve, reject) => {
    try {
      bcrypt
        .compare(plainText, hashedPassword)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};
