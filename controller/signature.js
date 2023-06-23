const Web3 = require("web3");

const web3 = new Web3(process.env.provider);

const signTx = async (req, res) => {
  const { message } = req.body;
  const privateKey = process.env.privateKey;

  const signature = await web3.eth.accounts.sign(message, privateKey);

  res.json(signature);
};

module.exports = {
  signTx
};

