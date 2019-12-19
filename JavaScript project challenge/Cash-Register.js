function checkMoney(arr){
  if(arr[0] == 'PENNY') {
    return 0.01;
  } else if(arr[0] == 'NICKEL'){
    return 0.05;
  } else if(arr[0] == 'DIME') {
    return 0.1;
  } else if(arr[0] == 'QUARTER') {
    return 0.25;
  } else if(arr[0] == 'ONE') {
    return 1;
  } else if(arr[0] == 'FIVE') {
    return 5;
  } else if(arr[0] == 'TEN') {
    return 10;
  } else if(arr[0] == 'TWENTY') {
    return 20;
  } else if(arr[0] == 'ONE HUNDRED') {
    return 100;
  }
}

// function numbersequal(a,b){
//         return Math.abs(a-b)<Number.EPSILON;
//     }

function checkCashRegister(price, cash, cid) {
  let tempCid = [];
  for(let i = 0; i < cid.length; i++) {
    tempCid.push(cid[i][1]);
  }
  let change = cash - price;
  let changeObject = {"status": '',
                      "change": []};
  let positiveZero = 0.00000000000001;
  let negativeZero = -0.00000000000001;
  let index = 0;
  while(change > 0 && index < 10) {
    for(let i = cid.length-1; i >= 0; i--) {
      if(checkMoney(cid[i]) <= change && checkMoney(cid[i+1]) >= change) {
          while(tempCid[i] == 0 && i >= 0){
            i--;
            if(i == 0 && tempCid[i] == 0) {
              break;
            }
          }
          let number = Math.floor(change / checkMoney(cid[i]));
          if(number >= (tempCid[i] / checkMoney(cid[i]))) {
                change = change - cid[i][1];
                // if(numbersequal(Math.round(change*20)/20,change)){
                //   change = Math.round(change*20)/20;
                // }
                change = change.toFixed(2);
                change = Number(change);
                tempCid[i] = 0;
                changeObject.change.push(cid[i]);
                break;
          } else {
                change = change - (checkMoney(cid[i]) * number);
                // if(numbersequal(Math.round(change*20)/20,change) && change < 1){
                //   change = Math.round(change*20)/20;
                // }
                change = change.toFixed(2);
                change = Number(change);
                tempCid[i] -= (checkMoney(cid[i]) * number);
                let arr = [];
                arr[0] = cid[i][0];
                arr[1] = checkMoney(cid[i]) * number;
                changeObject["change"].push(arr);
                break;
            }
        }
    }
    index++;
    if(change < positiveZero && change > negativeZero) {
      for(let i = 0; i < cid.length; i++) {
        if(tempCid[i] !== 0) {
          changeObject.status = 'OPEN';
          return changeObject
        }
      }
      changeObject.status = "CLOSED";
      changeObject.change = [];
      for(let i = 0; i < cid.length; i++) {
        changeObject.change.push(cid[i]);
      }
      return changeObject; 
    }
    if(index == 10 && change > positiveZero) {
       changeObject.status = "INSUFFICIENT_FUNDS";
       changeObject.change = [];
       return changeObject; 
    }
  }
}

let cashinDrawer = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
console.log((checkCashRegister(3.26,100,cashinDrawer)));