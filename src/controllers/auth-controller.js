import { refreshHelper } from "../helpers/auth-helper.js";

//@desc     Refresh Access Token
//@route    GET /api/auth/refresh-token
export const refreshAccess = (req, res) => {
  try {
    refreshHelper(req.headers?.authorization)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(error.status || 500).send(error);
      });
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
};
