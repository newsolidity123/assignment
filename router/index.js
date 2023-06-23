const express = require("express");
const router = express.Router();

require("./fiat")(router);
require("./litecoin")(router);
require("./Signature")(router)

module.exports = router;
