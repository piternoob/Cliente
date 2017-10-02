function nif() {
  var cadena = prompt("Introduce un NIF:");
  var primero = "XYZLKM";
  var numeros = "0123456789";
  var num = "";
  var contadorN = 0;
  var cadenaN="";
  var primeroB;
  var control = "TRWAGMYFPDXBNJZSQVHLCKE";
  var controlB = false;
  var valor;

  cadena = cadena.toUpperCase();
  if (cadena.length == 8) {
    alert("Comprobar si tiene longitud 8");
    for (var i = 0; i < primero.length && !primeroB; i++) {
      if (i == parseInt(primero.charAt(i))) {
        primeroB = true;
      }
    }
    if (primeroB) {
      alert("El primer caracter es valido");
      for (var i = 1; i < cadena.length - 2 && contadorN == (i - 1); i++) {
        for (var j = 0; j < numeros.length && contadorN == i; j++) {
          if (cadena.charAt(i) == numeros.charAt(j)) {
            contadorN++;
          }
        }
      }
      if (contadorN == cadena.length - 2) {
        for (var i = 0; i < control.length && !controlB; i++) {
          if (control.charAt(i) == cadena.charAt(length - 1)) {
            controlB = true;
          }
        }
        if (controlB) {
          alert("Comprobar control...");
          controlB = false;
          if (cadena.charAt(0) == "Y") {
            num += "1";
          } else if (cadena.charAt(0) == "Z") {
            num += "2";
          }
          for (var i = 1; i < cadena.length - 1; i++) {
            num += cadena.charAt(i);
          }

          if (cadena.charAt(length - 1) == control.charAt(parseInt(num) % 23)) {
            document.write("Nif valido");
            valor = 1;
          } else {
            document.write("Fallo control");
            valor = 2;
          }



        } else {
          document.write("Fallo control");
          valor = 2;
        }
      } else {
        document.write("Dato no valido");
        valor = 0;
      }
    } else {
      alert("Comprobar si es dni");
      for (var i = 0; i < cadena.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadena.charAt(i) == numeros.charAt(j)) {
            cadenaN+=cadena.charAt(i);
          }
        }
      }
      if (cadenaN.length == cadena.length && parseInt(cadenaN) >= 100000) {
        document.write("Dni valido");
        valor = 3;
      } else {
        document.write("Dni no valido "+cadenaN);
        valor = 0;
      }

    }
  } else {
    alert("Comprobar dni 6 7 numeros");


    for (var i = 0; i < cadena.length && contadorN == i - 1; i++) {
      for (var j = 0; j < numeros.length && contadorN == i; j++) {
        if (cadena.charAt(i) == numeros.charAt(j)) {
          contadorN++;
        }
      }
    }
    if (contadorN == cadena.length && contadorN >= 100000) {
      document.write("Dni valido");
      valor = 3;
    } else {
      document.write("Dni no valido");
      valor = 0;
    }



  }

}
