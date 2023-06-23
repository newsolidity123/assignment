const signature = require("../controller/signature");

module.exports = (router) => {
  router.get("/web3/signature", signature.signTx);
};
