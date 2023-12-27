import { Users } from "../models/userSchema.js";
import token from "../services/jwt.js";



const protect = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;
    if (accessToken) {
      //checking token
      token
        .verifyAccess(accessToken)
        .then((decoded) => {
          //verifying token
          Users.findOne({ userId: decoded.userId })
            .then((user) => {
              //getting user
              req.user = user; //setting user as req user
              next(); //passing to next middleware
            })
            .catch((error) => {
              res
                .status(404)
                .send({
                  status: 404,
                  error_code: "USER_NOT_FOUND",
                  message: "Invalid user",
                  error
                }); //error for user not fouhnd
            });
        })
        .catch((error) => {
          res
            .status(401)
            .send({
              status: 401,
              error_code: "INVALID_TOKEN",
              message: "Unauthorised user.",
              error
            }); //error for invalid token
        });
    } else {
      res
        .status(401)
        .send({
          status: 401,
          error_code: "NO_TOKEN",
          message: "Unauthorised user.",
          error
        }); //error for for token
    }
  } catch (error) {
    res
      .status(500)
      .json({
        status: 500,
        error_code: "SERVER_ERROR",
        message: "Internal server error.",
        error
      }); // internal server error
  }
};


export default protect;