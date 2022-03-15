function rot13(str) {
  return str.replace( /[A-Za-z]/g , function(char) {
    return String.fromCharCode( char.charCodeAt(0) + ( char.toUpperCase() <= "M" ? 13 : -13 ));
  });
}
