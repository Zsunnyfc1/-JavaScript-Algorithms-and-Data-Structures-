var button = document.getElementById("ConfirmButton");

button.onclick = function myFunction(){
  var value = document.getElementById("testInput").value;
    printInput();
   palindrome(value);
}

  
  function printInput() {
    var value = document.getElementById("testInput").value;
    document.getElementById("printedStatement").innerHTML = value;
}


function palindrome(string) {
 var re = /[^A-Za-z0-9]/g;
 string = string.toLowerCase().replace(re, '');
 var len = string.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
     document.getElementById("trueorfalse").innerHTML="false";
       return false;
   }
 }
  document.getElementById("trueorfalse").innerHTML="true";
 return true;
}
