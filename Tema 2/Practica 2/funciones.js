function esnif() {
  var cadena = prompt("Introduce un NIF:");
  var ret;

  cadena = cadena.toUpperCase();

  ret = nif(cadena);
  alert(ret);

  switch (ret) {
    case 1:
      document.write("Se ha introducido un NIF correcto.");
      break;
    case 2:
      document.write("Se ha introducido un NIF erróneo. El caracter de control es erróneo.");
      break;
    case 3:
      document.write("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.");
      break;
    default:
      document.write("Se ha introducido un dato no válido. No es NIF ni un DNI.");
  }

}

function escif() {
  var cadena = prompt("Introduce un CIF:");
  var ret;

  cadena = cadena.toUpperCase();
  ret = cif(cadena);
  alert(ret);

  switch (ret) {
    case 1:
      document.write("Se ha introducido un CIF correcto.");
      break;
    case 2:
      document.write("Se ha introducido un CIF erróneo. El carácter de control es erróneo.");
      break;
    default:
      document.write("Se ha introducido un dato no válido. No es CIF.");
  }
}

function esnifcif() {
  var cadena = prompt("Introduce un NIF o un CIF:");
  var ret;

  cadena = cadena.toUpperCase();

  ret = nifcif(cadena);
  alert(ret);

  switch (ret) {
    case "C1":
      document.write("Se ha introducido un cif correcto.");
      break;
    case "C2":
      document.write("Se ha introducido un cif erróneo. El carácter de control es erróneo.  ");
      break;
    case "N1":
      document.write("Se ha introducido un NIF correcto.");
      break;
    case "N2":
      document.write("Se ha introducido un NIF erróneo. El carácter de control es erróneo.");
      break;
    case "N3":
      document.write("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.");
      break;
    default:
      document.write("Se ha introducido un dato no válido.");
  }
}
