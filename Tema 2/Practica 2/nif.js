function nif(cadena) {
  //var cadena = prompt("Introduce un NIF:");
  var letras = "XYZLKM";
  var numeros = "0123456789";
  var control = "TRWAGMYFPDXBNJZSQVHLCKE";
  var esNif = false;
  var esNifDni = false;
  var cadenaNum = "";
  var contador = 0;
  var valor;
  var valDni;

  if (cadena.length == 9) {
    for (var i = 0; i < letras.length && !esNif; i++) {
      if (letras.charAt(i) == cadena.charAt(0)) {
        esNif = true;
      }
    }
    if (!esNif) {
      //alert("Hola");
      for (var i = 0; i < numeros.length && !esNifDni; i++) {
        if (numeros.charAt(i) == cadena.charAt(0)) {
          esNifDni = true;
        }
      }
    }
    if (esNif || esNifDni) {
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
          valor=1;
        } else {
          //document.write("Control no valido.");
          valor = 2;
        }
      } else {
        //document.write("No es nif ni dni.");
        valor = 0;
      }
    } else {
      //document.write("No es nif ni dni.");
      valor = 0;
    }
  } else if (cadena.length >= 6 && cadena.length <= 8) {
    valDni = parseInt(cadena);
    if (cadena.length == valDni.toString().length && valDni >= 100000) {
      valor = 3;
    } else {
      valor = 0;
    }
  } else {
    valor = 0;
  }

  /*if (cadena.length < 9) {
    while (cadena.length < 9) {
      cadena = "0" + cadena;
    }
  }*/


  return valor;
}

function cif(cadena) {
  //var cadena = prompt("Introduce un CIF:");
  var controlNum = "ABCDEFGHJUV"; //ABCDEFGHJUV
  var controlLetra = "NPQRSW"; //NPQRSW
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

  if (cadena.length == 9) {
    for (var i = 0; i < controlNum.length && !esNum; i++) {
      if (cadena.charAt(0) == controlNum.charAt(i)) {
        esNum = true;
      }
    }
    if (!esNum) {
      for (var i = 0; i < controlLetra.length && !esLetra; i++) {
        if (cadena.charAt(0) == controlLetra.charAt(i)) {
          esLetra = true;
        }
      }
    }
    if (esNum || esLetra) {
      cadenaNum = cadena.substring(1, 8);
      for (var i = 0; i < cadenaNum.length; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadenaNum.charAt(i) == numeros.charAt(j)) {
            contador++;
          }
        }
      }
      if (contador == cadenaNum.length) {
        for (var i = 1; i < cadenaNum.length; i += 2) {
          suma += parseInt(cadenaNum.charAt(i));
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
            //document.write("CIF correcto.");
            valor = 1;
          } else {
            //document.write("CIF incorrecto control no valido.");
            valor = 2;
          }
        } else {
          if (controlValores.charAt(control) == cadena.charAt(8)) {
            //document.write("CIF correcto.");
            valor = 1;
          } else {
            //document.write("CIF incorrecto control no valido.");
            valor = 2;
          }
        }
      } else {
        //document.write("No es cif1.");
        valor = 0;
      }
    } else {
      //document.write("No es cif2.");
      valor = 0;
    }
  } else {
    //document.write("No es cif3.");
    valor = 0;
  }
  return valor;
}

function nifcif(cadena) {
  var valoresCif = "ABCDEFGHJUVNPQRSW";
  var cifBool = false;
  var letraCif = "C";
  var letraNif = "N";
  var valor;

  for (var i = 0; i < valoresCif.length && !cifBool; i++) {
    if (cadena.charAt(0) == valoresCif.charAt(i)) {
      cifBool = true;
    }
  }
  if (cifBool) {
    if (cif(cadena) == 0) {
      valor = "0";
    } else {
      valor = letraCif + cif(cadena);
    }
  } else {
    if (nif(cadena) == 0) {
      valor = "0";
    } else {
      valor = letraNif + nif(cadena);
    }
  }
  return valor;
}
