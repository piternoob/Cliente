function nif() {
  var cadena = prompt("Introduce un NIF:");
  var letras = "XYZLKM";
  var numeros = "0123456789";
  var control = "TRWAGMYFPDXBNJZSQVHLCKE";
  var esNif = false;
  var esDni = false;
  var cadenaNum = "";
  var contador = 0;
  var valor;

  cadena = cadena.toUpperCase();
  if (cadena.length < 9) {
    while (cadena.length < 9) {
      cadena = "0" + cadena;
    }
  }
  for (var i = 0; i < letras.length && !esNif; i++) {
    if (letras.charAt(i) == cadena.charAt(0)) {
      esNif = true;
    }
  }
  if (!esNif) {
    alert("Hola");
    for (var i = 0; i < numeros.length && !esDni; i++) {
      if (numeros.charAt(i) == cadena.charAt(0)) {
        esDni = true;
      }
    }
  }
  if (esNif || esDni) {
    if (cadena.charAt(0) == "Z") {
      cadenaNum += "2";
    } else if (cadena.charAt(0) == "Y") {
      cadenaNum += "1";
    }
    if (esNif) {
      cadenaNum += cadena.substring(1, 8);
    } else {
      cadenaNum += cadena.substring(0, 8);
    }
    for (var i = 0; i < cadenaNum.length; i++) {
      for (var j = 0; j < numeros.length; j++) {
        if (cadenaNum.charAt(i) == numeros.charAt(j)) {
          contador++;
        }
      }
    }
    if (contador == cadenaNum.length) {
      if (cadena.charAt(8) == control.charAt(parseInt(cadenaNum) % 23)) {
        if (esNif) {
          document.write("Control valido, es NIF.");
          valor = 1;
        } else if (parseInt(cadenaNum) >= 100000) {
          document.write("Control valido, es DNI.");
          valor = 3;
        } else {
          document.write("Dni no valido menor de 100000.");
          valor = 0;
        }
      } else {
        document.write("Control no valido.");
        valor = 2;
      }
    } else {
      document.write("No es nif ni dni.");
      valor = 0;
    }
  } else {
    document.write("No es nif ni dni.");
    valor = 0;
  }
}

function cif() {
  var cadena = prompt("Introduce un CIF:");
  var controlNum = "AHJUV";
  var controlLetra = "PQRSW";
  var controlValores = "JABCDEFGHI";
  var control;
  var esNum = false;
  var esLetra = false;
  var numeros = "0123456789";
  var cadenaNum = "";
  var contador = 0;
  var suma = 0;
  var str;
  var valor;

cadena=cadena.toUpperCase();
  if (cadena.length == 9) {
    for (var i = 0; i < controlNum.length && !esNum && !esLetra; i++) {
      if (cadena.charAt(0) == controlNum.charAt(i)) {
        esNum = true;
      } else if (cadena.charAt(0) == controlLetra.charAt(i)) {
        esLetra = true;
      }
    }
    if (esNum || esLetra) {
      cadenaNum = cadenaNum.substring(1, 8);
      for (var i = 0; i < cadenaNum.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadenaNum.charAt(i) == numeros.charAt(j)) {
            contador++;
          }
        }
      }
      if (contador == cadenaNum.length) {
        alert("h"+suma);
        for (var i = 1; i < cadenaNum.length; i += 2) {
          suma += parseInt(cadenaNum.charAt(i));
          alert("h"+suma);
        }
        for (var i = 0; i < cadenaNum.length; i += 2) {
          str = (parseInt(cadenaNum.charAt(i)) * 2).toString();
          if (str.length == 1) {
            suma += (parseInt(cadenaNum.charAt(i)) * 2);
          } else {
            for (var j = 0; j < str.length; j++) {
              suma += parseInt(str.charAt(j));
            }
          }
        }
        control = 10 - suma % 10;
        if (control == 10) {
          control = 0;
        }
        if (esNum) {
          if (control.toString() == cadena.charAt(8)) {
            document.write("CIF correcto.");
            valor = 1;
          } else {
            document.write("CIF incorrecto control no valido."+suma%10+" "+suma+" "+control);
            valor = 2;
          }
        } else {
          if (controlValores.charAt(control) == cadena.charAt(8)) {
            document.write("CIF correcto.");
            valor = 1;
          } else {
            document.write("CIF incorrecto control no valido.");
            valor = 2;
          }
        }
      } else {
        document.write("No es cif1.");
        valor = 0;
      }
    } else {
      document.write("No es cif2.");
      valor = 0;
    }
  } else {
    document.write("No es cif3.");
    valor = 0;
  }
}
