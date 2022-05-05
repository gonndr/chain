const { Blockchain, Transaction } = require("./blockchain");

let myCoin = new Blockchain();
myCoin.createTransaction(new Transaction("address1", "address2", 100));
myCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
myCoin.minePendingTransactions("address3");

console.log(
  "\n Balance of address 3 is",
  myCoin.getBalanceOfAddress("address3")
);

console.log("\n Starting the miner...");
myCoin.minePendingTransactions("address3");

console.log(
  "\n Balance of address 3 is",
  myCoin.getBalanceOfAddress("address3")
);
