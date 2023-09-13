const util = require("util");
const { connection } = require("../config/database");
const query = util.promisify(connection.query).bind(connection);
module.exports = { query };
