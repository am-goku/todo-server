import jwt from "jsonwebtoken";

const token = {
  getAccessToken: (userId) => {
    return new Promise((resolve, reject) => {
      try {
        const accessToken = jwt.sign({ userId }, process.env.KEY_SECRET, {
          expiresIn: "100000",
        });
        resolve(accessToken);
      } catch (error) {
        reject(error);
      }
    });
  },

  getRefreshToken: (userId) => {
    return new Promise((resolve, reject) => {
      try {
        const refreshToken = jwt.sign({ userId }, process.env.KEY_SECRET, {
          expiresIn: "10d",
        });

        resolve(refreshToken);
      } catch (error) {
        reject(error);
      }
    });
  },

  getTokens: (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tokens = {
                accessToken: await token.getAccessToken(userId),
                refreshToken: await token.getRefreshToken(userId)
            };
            resolve(tokens)
        } catch (error) {
            reject(error)
        }
    })
  },


  verifyAccess: (token) => {
    return new Promise((resolve, reject) => {
        try {
            const decoded = jwt.verify(token, process.env.KEY_SECRET);
            resolve(decoded)
        } catch (error) {
            reject({status: 401, message: "Invalid token", error})
        }
    })
  },


};

export default token;
