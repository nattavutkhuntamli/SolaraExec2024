const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  let JWT_SECREF = process.env.JWT_SECREF || "HimyNameisneverdie";
  return jwt.sign({id}, JWT_SECREF, {expiresIn: '1d'} )
};
module.exports = { generateToken };
