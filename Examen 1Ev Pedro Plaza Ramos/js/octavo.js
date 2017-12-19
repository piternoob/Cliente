function ejercicio8(){
	var cadena=prompt("Introduce una palabra.");
	cadena=cadena.toUpperCase();
	pentavocalica(cadena);
}

function pentavocalica(palabra){
	var correcto=true;
	var bol=[false, false, false, false, false];
	var vocales=["A", "E", "I", "O", "U"];
	
	for(var i=0; i<palabra.length && correcto; i++){
		correcto=false;
		for(var j=0; j<vocales.length; j++)
			if(palabra.charAt(i)==vocales[j]){
				if(!bol[j]){
					bol[j]=true;
					correcto=true;
				}
			}
	}
	if(correcto)
		alert("La palabra es pentavocalica.");
	else
		alert("La palabra no es pentavocalica.");
}