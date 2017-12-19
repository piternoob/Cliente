function ejercicio2(){
	var param;
	var preguntar;
	var array=new Array();
	
	do{
		param=prompt("Introduce un parametro: si no es un numero sale.");
		array.push(param);
	}while(!isNaN(param));
	alert("Hay "+abundantes(array)+" numeros abundantes.");
}

function abundantes(array){
	var suma;
	var contador=0;;
	
	for(var i=0; i<array.length; i++){
		suma=1;
		for(var j=2; j<array[i]; j++)
			if(array[i]%j==0)
				suma+=j;
		if(suma>array[i])
			contador++;
	}
	
	return contador;
}