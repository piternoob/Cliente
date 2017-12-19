function ejercicio1(){
	var param1=prompt("Introduce el primer parametro");
	var param2=prompt("Introduce el segundo parametro");
	
	anagrama(param1,param2);
}

function anagrama(primero, segundo){
	var anagram=true;
	var encontrado=false;
	
	if(primero.length==segundo.length){
		for(var i=0; i<primero.length && anagram; i++){
			for(var j=0; j<segundo.length && !encontrado; j++)
				if(primero.charAt(i)==segundo.charAt(j)){
					encontrado=true;
					segundo.replace(segundo.charAt(j),"");
				}
			if(!encontrado){
				alert("No son anagramas.");
				anagram=false;
			}
		}
		if(anagram)
			alert("Son anagramas.");
	} else
		alert("No son anagramas.");
}
