function ejercicio6(){
	var cadena=prompt("Introduce una cadena");
	if(esAritmetica(cadena))
		alert("Es aritmetica.");
	else
		alert("No es aritmetica");
}
function esAritmetica(cadena){
	var correcto=true;
	var esNum=false;
	var esOp=false;
	var operadores=["+", "-", "*", "/"];
	
	for(var i=0; i<cadena.length && correcto; i++){
		if(!isNaN(cadena.charAt(i)))
			esNum=true;
		if(!esNum)
			for(var j=0; j<operadores.length && !esOp; j++)
				if(cadena.charAt(i)==operadores[j]){
					if(!isNaN(cadena.charAt(i-1)) && !isNaN(cadena.charAt(i+1)) && (i+1)<cadena.length && (i-1)>=0)
						esOp=true;
					else
						correcto=false;
				}
		esNum=false;
		esOp=false;
	}
	return correcto;
}