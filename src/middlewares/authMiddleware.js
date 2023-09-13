const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");
const AdmModels = require('../models/admin/admin')

exports.authMiddleware = AsyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    let JWT_SECREF = process.env.JWT_SECREF || "HimyNameisneverdie";
    try {
      if (token) {
        const decoded = jwt.verify(token, JWT_SECREF);
        let id = decoded.id;
        const user = await AdmModels.findById(id)
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error(
        "Not Authorized token expired , Please Login again" + error
      );
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});