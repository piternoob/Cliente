function nif() {
  var cadena = prompt("Introduce un NIF:");
  var primero = "XYZLKM";
  var numeros = "0123456789";
  var num = "";
  var contadorN = 0;
  var cadenaN = "";
  var primeroB;
  var control = "TRWAGMYFPDXBNJZSQVHLCKE";
  var controlB = false;
  var valor;

  cadena = cadena.toUpperCase();
  alert("Comprobar si tiene longitud 9");
  if (cadena.length == 9) {
    alert("Tiene longitud 9")
    for (var i = 0; i < primero.length && !primeroB; i++) {
      if (cadena.charAt(0) == primero.charAt(i)) {
        primeroB = true;
      }
    }
    if (primeroB) {
      alert("El primer caracter es valido");
      for (var i = 1; i < cadena.length - 1; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadena.charAt(i) == numeros.charAt(j)) {
            contadorN++;
          }
        }
      }
      if (contadorN == 7) {
        for (var i = 0; i < control.length && !controlB; i++) {
          if (control.charAt(i) == cadena.charAt(cadena.length - 1)) {
            controlB = true;
          }
        }
        if (controlB) {
          alert("Comprobar control");
          if (cadena.charAt(0) == "Y") {
            num += "1";
          } else if (cadena.charAt(0) == "Z") {
            num += "2";
          }
          for (var i = 1; i < cadena.length - 1; i++) {
            num += cadena.charAt(i);
          }
          if (cadena.charAt(cadena.length - 1) == control.charAt(parseInt(num) % 23)) {
            document.write("Nif valido");
            valor = 1;
          } else {
            document.write("Fallo control");
            valor = 2;
          }
        } else {
          document.write("Fallo control1");
          valor = 2;
        }
      } else {
        document.write("Dato no valido");
        valor = 0;
      }
    } else {
      document.write("Nif no valido ");
      valor = 0;
    }
  } else if (cadena.length >= 6 || cadena.length <= 8) {
    alert("Vemos si es un dni valido:");
    for (var i = 0; i < cadena.length; i++) {
      for (var j = 0; j < numeros.length; j++) {
        if (cadena.charAt(i) == numeros.charAt(j)) {
          cadenaN += cadena.charAt(i);
        }
      }
    }
    if (cadenaN.length == cadena.length) {
      document.write("Dni valido");
      valor = 3;
    } else {
      document.write("Dni no valido ");
      valor = 0;
    }
  } else {
    document.write("Documento no valido ");
    valor = 0;
  }
}




function cif() {
  var cadena = prompt("Introduce un CIF:")
  var control = 0;
  //control=1 - Control es numero
  //control=2 - Control es letra
  var letrasN = "AHJUV";
  var letrasL = "PQRSW";
  var numeros = "0123456789";
  var control;
  var valor;

  cadena = cadena.toUpperCase();
  alert("Comprobamos si tiene longitud 9")
  if (cadena.length == 9) {
    for (var i = 0; i < letrasN.length && control == 0; i++) {
      if (cadena.charAt(0) == letrasN.charAt(i)) {
        control = 1;
      } else if (cadena.charAt(0) == letrasL.charAt(i)) {
        control = 2;
      }
    }
    if (control == 1) {
      control = false;
      for (var i = 0; i < numeros.length && !control; i++) {
        if (cadena.charAt(cadena.length - 1) == numeros.charAt(i)) {
          control = true;
        }
      }
      if (control) {
        alert("Control valido");
      } else {
        document.write("CIF erroneo, control no valido ");
        valor = 2;
      }
      alert("Control valido");
    } else if (control == 2) {
      control = true;
      for (var i = 0; i < numeros.length && control; i++) {
        if (cadena.charAt(cadena.length - 1) == numeros.charAt(i)) {
          control = false;
        }
      }
      if (control) {
        alert("Control valido");
      } else {
        document.write("CIF erroneo, control no valido ");
        valor = 2;
      }
    } else {
      document.write("CIF no valido ");
      valor = 0;
    }
  } else {
    document.write("CIF no valido ");
    valor = 0;
  }
}
