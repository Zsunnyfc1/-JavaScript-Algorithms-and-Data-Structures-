const currencyValue = {
    "PENNY" : 1,
    "NICKEL" : 5,
    "DIME" : 10,
    "QUARTER" : 25,
    "ONE" : 100,
    "FIVE" : 500,
    "TEN" : 1000,
    "TWENTY" : 2000,
    "HUNDRED" : 10000
  }

  function checkCashRegister(price, cash, drawer) {
    let change = [];
    let status = '';
    let changeTotal = cash * 100 - price * 100;
    let changeTotalCheck = changeTotal;

    let drawerSum = 0;
    let filteredDrawer = drawer.filter(elem => elem[1] !== 0).reverse();

    filteredDrawer.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1] * 100;
        drawerSum += currSum;
        let amount = 0;
        while (changeTotal >= currencyValue[curr] && currSum > 0) {
        amount += currencyValue[curr];
        changeTotal -= currencyValue[curr];
        currSum -= currencyValue[curr]; 
        }
        if (amount !== 0) {
        change.push([curr, amount / 100]);
        }
    });
    if (changeTotal > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
    } else if (changeTotal == 0 && changeTotalCheck == drawerSum) {
        status = 'CLOSED';
        change = drawer;
    } else {
        status = 'OPEN';
    }
    return {'status': status, 'change': change};
}

