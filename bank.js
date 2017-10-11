var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

module.exports = Bank;

Bank.prototype.totalValue = function() {
  var totalValue = 0;
  this.accounts.forEach(function(account) {
    totalValue += account.value;
  });
  return totalValue;
}

Bank.prototype.accountByName = function(name) {
  var foundAccount = this.accounts.find(function(account) {
    return account.name === name;
  });
  return foundAccount;
}

Bank.prototype.largestAccount = function() {
  var highestValue = 0;
  var highestAccount = null;
  this.accounts.forEach(function(account) {
    if (account.value >= highestValue) {
      highestValue = account.value;
      highestAccount = account;
    }
  })
  return highestAccount;
}

Bank.prototype.averageValue = function() {
  var valueArray = [];
  this.accounts.map(function(account) {
    valueArray.push(account.value);
  });
  var totalSum = valueArray.reduce(function(sum, element) {
    return sum + element;
  },0);
  return totalSum/this.accounts.length;
}

Bank.prototype.businessAccounts = function() {
  var businessArray = this.accounts.filter(function(account) {
    return account.type === "business";
  })
  return businessArray;
}
