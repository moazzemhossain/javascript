function dectobin(var a){

var r,b,i=0;

while(a!=0){
    r=a%2;
	b=r+r*10*i;
	a=a/2;
	i++;
   
}
return b;
}


function myFunction(){

      var dec,bin,oct,hex;
    dec=document.getElementById("decimal").value;
	
	bin=dectobin(dec);
	oct=dectooct(dec);
	hex=dectohex(dec);
	
	
    
	
	document.getElementById("binary").value=bin;
	document.getElementById("octal").value=oct;
	document.getElementById("hexadecimal").value=hex;
	

}


