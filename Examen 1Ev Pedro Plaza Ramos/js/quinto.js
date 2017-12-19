var interv;

function iniciar(){
	interv=window.setInterval("intervalo()",12000);
}

function parar(){
	clearInterval(interv);
}

function intervalo(){
	var ventana=window.open("http://www.google.es");
}
      