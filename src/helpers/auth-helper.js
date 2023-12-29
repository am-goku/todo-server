import { Users } from "../models/userSchema.js";
import token from "../services/jwt.js";

//@desc     Refresh Access Token
//@route    GET /api/auth/refresh-token
export const refreshHelper = (refreshToken) => {
  return new Promise((resolve, reject) => {
    try {
      token
        .verifyAccess(refreshToken)
        .then(async (decoded) => {
          const user = await Users.findOne({ _id: decoded?.userId });

          if (user) {
            const accessToken = await token.getRefreshToken(user?._id);
            resolve(accessToken);
          } else {
            throw new Error("User Not found / Invalid token");
          }
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
