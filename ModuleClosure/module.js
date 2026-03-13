var rudyTimer = (function() {
  timer = null;

  var delayMsg = function() {
    if (timer === null) {
      timer = setInterval(rudy, 1000);
    } else {
      clearInterval(timer);
      timer = null;
    }
  };

  var rudy = function() {
    document.getElementById("output").innerHTML += "Rudy!";
  };

  return delayMsg;
})();

var accountInfoList = [];

function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

var account = (function() {
  var createAccount = function() {
    var name = document.getElementById("name").value;
    var balance = document.getElementById("deposit").value;
    var newAccount = new Account(name, balance);
    accountInfoList.push(newAccount);
  };

  var display = function() {
    createAccount();
    var info = "";
    for (var i = 0; i < accountInfoList.length; i++) {
      info += "Account name: " + accountInfoList[i].name + " Balance: " + accountInfoList[i].balance + "\n";
    }
    document.getElementById("text").innerHTML = info;
  };
  return display;
})();
