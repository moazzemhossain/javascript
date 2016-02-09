
function dectobin()
{
   var dec,bin,oct,hex;
   dec=document.getElementById("decimal").value;
   oct=toOctal(dec);
   bin= toBinary(dec);
   hex=toHexadecimal(dec);
   document.getElementById("binary").value=bin;
   document.getElementById("octal").value=oct;
   document.getElementById("hexadecimal").value=hex;

}
var toBinary = function(decNum){
    return parseInt(decNum,10).toString(2);
}
var toOctal= function(decNum){
    return parseInt(decNum,10).toString(8);
}
var toHexadecimal= function(decNum){
    return parseInt(decNum,10).toString(16);
}
