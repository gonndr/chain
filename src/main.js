const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "0460c6ec715120de0da821216e6903bde6ed596c3604e329706d62187b30404e5ea83937907fd6a0b6ae955fe71cdac67a72c0a2a18bea8d2d954e3f0a5522e40a"
);
const myWalletAddress = myKey.getPublic("hex");

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key", 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
myCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\n Balance of my wallet is",
  myCoin.getBalanceOfAddress(myWalletAddress)
);

console.log(myCoin.pendingTransactions);
