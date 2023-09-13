const bcrypt = require("bcrypt");

exports.BcryptPass = {
  password_hash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
  password_verify(password, password_hash) {
    return bcrypt.compareSync(password, password_hash);
  },
  
};
