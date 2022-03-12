// SCROLL NAVBAR FUNCTION
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

// PALINDROME CHECKER FUNCTIONS
function palindrome(string) {
 let re = /[^A-Za-z0-9]/g;
 string = string.toLowerCase().replace(re, '');
 let len = string.length;
 for (let i = 0; i < len/2; i++) {
   if (string[i] !== string[len - 1 - i]) {
     document.getElementById("response").style.color="#AF504C";
     return document.getElementById("response").innerHTML="is not a palindrome.";

   }
 }
   document.getElementById("response").style.color="#4CAF50";
   return document.getElementById("response").innerHTML="is a palindrome!";

}

palindromeButton.addEventListener("click", function() {
  document.getElementById('response').style.display = "block";
   let value = document.getElementById("inputArea").value;
   if(document.getElementById("inputArea").value.length == 0){
    document.getElementById("response").style.color="#0a75ad";
    document.getElementById("response").innerHTML="Enter alpha-numeric characters to see if it is a palindrome.";
   } else{
   document.getElementById("response").innerHTML=  value  + " " + palindrome(value);
  }
});
                             
// ROMAN NUMERAL CONVERTER FUNCTIONS
let romanNumeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

function convertToRoman(num) {
  var string = '';

  for (var i of Object.keys(romanNumeral)) {
    var q = Math.floor(num / romanNumeral[i]);
    num -= q * romanNumeral[i];
    string += i.repeat(q);
    if (num===0){
      return string}
  }
}

NumberToRomanButton.addEventListener("click", function() {
  let value = document.getElementById("numInput").value;
  document.getElementById("NumToRomResult").style.color="#2acaea";
  document.getElementById("NumToRomResult").innerHTML= value + "=" +convertToRoman(value);
});

function romanToInt(s) {
  let accumulator = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanNumeral[s[i]];
    }
  }
  return accumulator;
}

RomanToNumberButton.addEventListener("click", function() {
  let string = document.getElementById("romanInput").value;   
  document.getElementById("RomToNumResult").style.color="#2acaea";
  document.getElementById("RomToNumResult").innerHTML= string + "=" +romanToInt(string);
});

// CAESAR CIPHER functions
function rot13(str) {
  return str.replace( /[A-Za-z]/g , function(char) {
    return String.fromCharCode( char.charCodeAt(0) + ( char.toUpperCase() <= "M" ? 13 : -13 ));
  });
}

TextToCaesarButton.addEventListener("click", function() {
  let input = document.getElementById("textcaesar").value;
  document.getElementById("TextToCaesarResult").style.color="#00b800";
  document.getElementById("TextToCaesarResult").innerHTML= input + "=" + rot13(input);
});

function cipher(message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]);
}

CaesarToTextButton.addEventListener("click", function() {
  let input = document.getElementById("caesartext").value;
  document.getElementById("CaesarToTextResult").style.color="#00b800";
  document.getElementById("CaesarToTextResult").innerHTML= input + "=" + cipher(input);
});

// TELEPHONE NUMBER VALIDATOR FUNCTIONS
function telephoneCheck(str) {
  let numberCheck = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  if (numberCheck.test(str)) {
    document.getElementById("telephoneResponse").style.color="#4CAF50";
    return document.getElementById("telephoneResponse").innerHTML="is a valid phone number!";
  } else{
    document.getElementById("telephoneResponse").style.color="#d6342d";
    return document.getElementById("telephoneResponse").innerHTML="is not a phone number.";
  }
}

telephoneButton.addEventListener("click", function() {
   document.getElementById('telephoneResponse').style.display = "block";
   let value = document.getElementById("phoneInput").value;
   if(document.getElementById("phoneInput").value.length == 0){
    document.getElementById("telephoneResponse").style.color="#0a75ad";
    document.getElementById("telephoneResponse").innerHTML="Enter a valid phone number input.";
   } else{
   document.getElementById("telephoneResponse").innerHTML=  value  + " " + telephoneCheck(value);
  }
});
  
// CASH REGISTER FUNCTIONS
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

function cashCompare(){
     let priceEnter = parseInt(document.getElementById('priceInput').value);
     let paymentEnter = parseInt(document.getElementById('paymentInput').value);
     if(priceEnter > paymentEnter){
         alert('Payment must be higher than Price');
          return false;
     }else{
          return true;
     }
}


cashRegisterButton.addEventListener("click", function() {
let theprice = parseFloat(document.getElementById("priceInput").value);
let thepayment = parseFloat(document.getElementById("paymentInput").value);
  
const currencyPenny = ["PENNY"];
let amountPenny = parseFloat(document.getElementById("pennyInput").value);
const drawerPennies = currencyPenny.concat(amountPenny);

const currencyNickel = ["NICKEL"];
let amountNickel = parseFloat(document.getElementById("nickelInput").value);
const drawerNickels = currencyNickel.concat(amountNickel);

const currencyDime = ["DIME"];
let amountDime = parseFloat(document.getElementById("dimeInput").value);
const drawerDimes = currencyDime.concat(amountDime);

const currencyQuarter = ["QUARTER"];
let amountQuarter = parseFloat(document.getElementById("quarterInput").value);
const drawerQuarters = currencyQuarter.concat(amountQuarter);

const currencyOne = ["ONE"];
let amountOne = parseFloat(document.getElementById("oneInput").value);
const drawerOnes = currencyOne.concat(amountOne);

const currencyFive = ["FIVE"];
let amountFive = parseFloat(document.getElementById("fiveInput").value);
const drawerFives = currencyFive.concat(amountFive);

const currencyTen = ["TEN"];
let amountTen = parseFloat(document.getElementById("tenInput").value);
const drawerTens = currencyTen.concat(amountTen);

const currencyTwenty = ["TWENTY"];
let amountTwenty = parseFloat(document.getElementById("twentyInput").value);
const drawerTwenties = currencyTwenty.concat(amountTwenty);

const currencyHundred = ["HUNDRED"];
let amountHundred = parseFloat(document.getElementById("onehundredInput").value);
const drawerHundreds = currencyHundred.concat(amountHundred);
  
let thedrawer = [];   
 thedrawer.push(drawerPennies,drawerNickels,drawerDimes,drawerQuarters,drawerOnes,drawerFives,drawerTens,drawerTwenties,drawerHundreds)
  
 cashCompare();

 document.getElementById('cashRegisterChange').style.display = "block";
 document.getElementById("cashRegisterChange").style.color="#b20e66";
 document.getElementById("cashRegisterChange").innerHTML =
JSON.stringify(checkCashRegister(theprice,thepayment,thedrawer));
});