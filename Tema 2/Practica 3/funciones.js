function ejercicio1() {
  var numero = prompt("Introduce un número:");
  var contador = 0;

  while (numero > 1) {
    if (numero % 2 == 0) {
      numero /= 2;
    } else {
      contador++;
      numero--;
      numero /= 2;
    }
  }
  if (numero == 1) {
    contador++;
  }
  if (contador % 2 == 0) {
    document.write("Es un número malvado.");
  } else {
    document.write("No es un número malvado.");
  }
}

function ejercicio2() {
  var numero = prompt("Introduce un número:");
  var oblongo = false;

  for (var i = 1, j = 2; i * j <= numero; i++, j++) {
    if (i * j == numero) {
      oblongo = true;
    }
  }
  if (oblongo) {
    document.write("Es un número oblongo.");
  } else {
    document.write("No es un número oblongo.");
  }
}

function ejercicio3() {
  var cadena = prompt("Introduce una frase:");
  var posicion = 0;
  var caracter;
  var tautograma = true;

  cadena = cadena.toUpperCase();
  cadena = cadena.trim();
  caracter = cadena.charAt(0);

  if (cadena.indexOf(" ") == -1) {
    document.write("No tiene varias palabras.");
  } else {
    while (cadena.indexOf(" ", posicion) != -1 && tautograma) {
      posicion = cadena.indexOf(" ", posicion) + 1;
      if (caracter != cadena.charAt(posicion)) {
        tautograma = false;
      }
    }
    if (tautograma) {
      document.write("La frase es un tautograma.");
    } else {
      document.write("La frase no es un tautograma.");
    }
  }
}

function ejercicio4() {
  var numero=parseInt(prompt("Introduce un número:"));
  var octal=numero.toString(8);
  var hexadecimal=numero.toString(16);

  document.write("Octal: "+octal+" - Hexadecimal: "+hexadecimal);
}

function ejercicio5(){
  var numero=prompt("Introduce un número:");
  numero=numero.toString();
  numero=numero.toUpperCase();
  var hex="0123456789ABCDEF";
  var oc="01234567";
  var hexadecimal=true;
  var octal=true;
  var binario=true;

  for(var i=0; i<numero.length && binario;i++){
      if (numero.charAt(i)!="0" && numero.charAt(i)!="1") {
        binario=false;
    }
  }
  if (binario) {
    document.write("Es un número hexadecimal, octal y binario.");
  } else {
    for(var i=0; i<numero.length && octal;i++){
      octal=false;
      for (var j = 0; j < oc.length && !octal; j++) {
        if (numero.charAt(i)==oc.charAt(j)) {
          octal=true;
        }
      }
    }
    if (octal) {
      document.write("Es un número hexadecimal y octal.");
    } else {
      for(var i=0; i<numero.length && hexadecimal;i++){
        hexadecimal=false;
        for (var j = 0; j < hex.length && !hexadecimal; j++) {
          if (numero.charAt(i)==hex.charAt(j)) {
            hexadecimal=true;
          }
        }
      }
      if (hexadecimal) {
        document.write("Es un número hexadecimal.");
      } else {
        document.write("No es hexadecimal, ni octal, ni binario.")
      }
    }
  }
}
