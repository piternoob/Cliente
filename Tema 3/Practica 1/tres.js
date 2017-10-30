var validada = new Date;

function validar(){

	validada=new Date(fecha());
	var a=validada.toLocaleDateString();
	 alert(a);

}
function getValidada(){
	return validada;
}
function fecha() {

    var fecha = prompt("Introduce una fecha: (mes-dia-año)");
    var separador;
    var posicion1 = 0;
    var posicion2;
    var contador = 0;
    var numeros = "0123456789";
    var caracter;
    var num = true;
    var dia;
    var mes;
    var ano;

    var i;

    if (fecha.indexOf("/") != -1) {

      separador = "/";

    } else {

      separador = "-";

    }

    for (var i = 0; i < fecha.length && num; i++) {

      if (fecha.charAt(i) == separador) {

        contador++;

      } else {

        num = false;

        for (var j = 0; j < numeros.length && !num; j++) {
          if (fecha.charAt(i) == numeros.charAt(j)) {
            num = true;

          }
        }
      }
    }

    if (contador == 2 && num) {

      posicion1 = fecha.indexOf(separador);
      posicion2 = fecha.lastIndexOf(separador);
      mes = fecha.substring(0, posicion1);
      dia = fecha.substring(posicion1 + 1, posicion2);
      ano = fecha.substring(posicion2 + 1);

      if (mes.charAt(0) == 0) {
        mes = mes.replace(0, "");
      }

      if ((dia.length == 1 || dia.length == 2) && (mes >= 1 && mes <= 12) && (ano.length == 2 || ano.length == 4)) {

        switch (mes) {

          case "1":

          case "3":

          case "5":

          case "7":

          case "8":

          case "10":

          case "12":

            if (dia <= 31 && dia >= 1) {
              alert("Fecha valida");
              return fecha;
            } else {
              alert("Fecha no valida");
            }
            break;

          case "4":

          case "6":

          case "9":

          case "11":

            if (dia <= 30 && dia >= 1) {
              alert("Fecha valida");
              return fecha;
            } else {
              alert("Fecha no valida");
            }
            break;

          case "2":
            if (dia <= 28 && dia >= 1) {
              alert("Fecha valida");
            } else if ((dia == 29 && ano.length == 2 && ano % 4 == 0) || (dia == 29 && ano.length == 4 && ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0))) {

              alert("Fecha valida");
              return fecha;
            } else {
              alert("Fecha no valida");
            }
            break;
        }
      }
    } else {
      alert("Fecha no valida.");
    }
  }

function dia(){

	var dia = prompt("Introduce un dia:");
	var mes = parseInt(validada.getMonth())+1;
	var ano = validada.getFullYear();
	if(mes==2){
	if (dia <= 28 && dia >= 1) {
              alert("Fecha valida");
              validada.setDate(dia);
              a=validada.toLocaleDateString();
              alert(a);

            } else if ((dia == 29 && ano.length == 2 && ano % 4 == 0) || (dia == 29 && ano.length == 4 && ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0))) {

              alert("Fecha valida");
              validada.setDate(dia);
              alert(validada.toLocaleTimeString);
              a=validada.toLocaleDateString();
              alert(a);

            } else {
              alert("Fecha no valida");
            }

	}else if(dia <= 31 && dia >= 1){
		alert("Fecha valida");
              validada.setDate(dia);
               a=validada.toLocaleDateString();
              alert(a);
	}

}
function mes(){


	var mes = prompt("Introduce un mes:")-1;

	if(12>= mes <=1){
		alert("Fecha valida");
              validada.setMonth(mes);
               a=validada.toLocaleDateString();
              alert(a);
	}else{
		alert("Fecha no valida");

	}

}
function ano(){


	var ano = prompt("Introduce un año:");


		alert("Fecha valida");
              validada.setFullYear(ano);
               a=validada.toLocaleDateString();
              alert(a);



}
function numeros(){

	dia();
	mes();
	ano();
	alert(validada.toLocaleDateString());
}
