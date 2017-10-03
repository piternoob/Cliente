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
    alert("Tiene longitud 9");
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
  var cadenaNum = "";
  var sumaNum = 0;
  var contador = 0;
  var controlB;
  var valor;
  var str;
  var num;

  cadena = cadena.toUpperCase();
  alert("Comprobamos si tiene longitud 9");
  if (cadena.length == 9) {
    for (var i = 0; i < letrasN.length && control == 0; i++) {
      if (cadena.charAt(0) == letrasN.charAt(i)) {
        control = 1;
      } else if (cadena.charAt(0) == letrasL.charAt(i)) {
        control = 2;
      }
    }


    if (control != 0) {
      for (var i = 1; i < cadena.length - 1; i++) {
        for (var j = 0; j < numeros.length; j++) {
          if (cadena.charAt(i) == numeros.charAt(j)) {
            contador++;
          }
        }
      }

      if (contador == 7) {
        for (var i = 1; i < cadena.length - 1; i++) {
          cadenaNum += cadena.charAt(i);
        }
        if (control == 1) {
          controlB = false;
          for (var i = 0; i < numeros.length && !controlB; i++) {
            if (cadena.charAt(cadena.length - 1) == numeros.charAt(i)) {
              controlB = true;
            }
          }
          if (controlB) {
            alert("Control es numero");
            //sumamos los pares
            for (var i = 1; i < cadenaNum.length; i += 2) {
              sumaNum += parseInt(cadenaNum.charAt(i));
            }
            //impares
            for (var i = 0; i < cadenaNum.length; i += 2) {
              str=(parseInt(cadenaNum.charAt(i))*2).toString();
              if (str.length == 1) {
                sumaNum += (parseInt(cadenaNum.charAt(i))*2);
              } else {
                for (var j = 0; j < str.length; j++) {
                  sumaNum+= parseInt(str.charAt(j));
                }
              }
            }
            //dividir
            num=10-sumaNum%10;
            if (num==10) {
              num=0;
            }
            if (num==parseInt(cadena.charAt(cadena.length-1))) {
              document.write("CIF valido");
              valor = 1;
            } else {
              document.write("CIF erroneo, control no valido ");
              valor = 2;
            }


          } else {
            document.write("CIF erroneo, control no valido ");
            valor = 2;
          }
        } else {
          //contro==2
          controlB = true;
          for (var i = 0; i < numeros.length && controlB; i++) {
            if (cadena.charAt(cadena.length - 1) == numeros.charAt(i)) {
              controlB = false;
            }
          }
          if (controlB) {
            alert("Control es letra");






          } else {
            document.write("CIF erroneo, control no valido ");
            valor = 2;
          }
        }


      } else {
        document.write("CIF erroneo, numeros no validos");
        valor = 0;
      }
    } else {
      document.write("CIF erroneo, primera letra no valida");
      valor = 0;
    }


  } else {
    document.write("CIF no valido ");
    valor = 0;
  }
}
