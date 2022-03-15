//PALINDROME CHECKER

function palindrome(string) {
    let re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    let len = string.length;
    for (let i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
           return false;
      }
    }
    return true;
  }

palindrome('ada');
