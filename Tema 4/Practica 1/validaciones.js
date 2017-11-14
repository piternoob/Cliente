function codigosControl(banco, sucursal, cuenta){
  var stringBanco=banco.toString();
  var stringSucursal=sucursal.toString();
  var stringCuenta=cuenta.toString();
  var numero1=calcularBanco(stringBanco);
  var numero2=calcularSucursal(stringSucursal);
  var sumaNumeros=numero1+numero2;
  var primero=calcularNumero(sumaNumeros);
  var numero3=calcularCuenta(stringCuenta);
  var segundo=calcularNumero(numero3);
  var control=primero.toString()+segundo.toString();
  return control;
}

function calcularBanco(stringBanco){
  var numero=parseInt(stringBanco.charAt(0))*4+parseInt(stringBanco.charAt(1))*8+parseInt(stringBanco.charAt(2))*5+parseInt(stringBanco.charAt(3))*10;
  return numero;
}

function calcularSucursal(stringSucursal){
  var numero=parseInt(stringSucursal.charAt(0))*9+parseInt(stringSucursal.charAt(1))*7+parseInt(stringSucursal.charAt(2))*3+parseInt(stringSucursal.charAt(3))*6;
  return numero;
}

function calcularNumero(numero){
  var resto=parseFloat(numero)%11;
  var valor=11-resto;
  if (valor==10)
    valor=1;
  else if (valor==11)
    valor=0;
  return valor;
}

function calcularCuenta(stringCuenta){
  var numero=parseInt(stringCuenta.charAt(0))*1+parseInt(stringCuenta.charAt(1))*2+
  parseInt(stringCuenta.charAt(2))*4+parseInt(stringCuenta.charAt(3))*8+parseInt(stringCuenta.charAt(4))*5+
  parseInt(stringCuenta.charAt(5))*10+parseInt(stringCuenta.charAt(6))*9+parseInt(stringCuenta.charAt(7))*7+
  parseInt(stringCuenta.charAt(8))*3+parseInt(stringCuenta.charAt(9))*6;
  return numero;
}

function calcularIbanEs(codigo) {
  var cuenta=codigo+"142800";
  var resto=0;
  for (var i=0; i<cuenta.length; i+=10) {
    var dividir = resto.toString() + cuenta.substr(i, 10);
    resto = dividir % 97;
  }
  var control=98-resto;
  if (control < 10){
      control="0"+control.toString();
  }
  var iban = "ES"+control;
  return iban;
}

function comprobarIban(iban){
  var correcto=false;
  var arrayNumeros=[];
  var arrayLetras=["A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  for (var i = 0; i < 26; i++) {
    arrayNumeros[i]=10+i;
  }
  var primeraLetra=(iban.charAt(0)).toUpperCase();
  var segundaLetra=(iban.charAt(1)).toUpperCase();
  var codigo=iban.substring(4);
  alert(codigo);
  var ibanNumeros=codigo+convertir(primera).toString()+convertir(segunda).toString()+iban.charAt(2).toString()+iban.charAt(3).toString();
  var resto=parseFloat(ibanNumeros)%97;
  if(resto==1)
    correcto=true;
  return correcto;
}

function convertir(letra){
  var posicion;
  var encontrado=false;
  for (var i = 0; i < arrayLetras.length && !encontrado; i++) {
    if (letra==arrayLetras[i]) {
      posicion=i;
      encontrado=true;
    }
  }
  var valor=arrayNumeros[posicion];

  return valor;
}

function boton1() {
  var banco = prompt("Introduce el numero de banco:");
  if (banco.length == 4) {
    var sucursal = prompt("Introduce el numero de sucursal:");
    if (sucursal.length == 4) {
      var cuenta = prompt("Introduce el numero de cuenta:");
      if (cuenta.length == 10) {
        var control = codigosControl(banco, sucursal, cuenta);
        document.write("Su código de control es " + control);
      } else
        document.write("Cuenta no válida: 10 dígitos necesarios.");
    } else
      document.write("Sucursal no válida: 4 dígitos necesarios.");
  } else
    document.write("Banco no válido: 4 dígitos necesarios.");
}

function boton2(){
  var banco = prompt("Introduce el numero de banco:");
  if (banco.length == 4) {
    var sucursal = prompt("Introduce el numero de sucursal:");
    if (sucursal.length == 4) {
      var cuenta = prompt("Introduce el numero de cuenta:");
      if (cuenta.length == 10) {
        var control = codigosControl(banco, sucursal, cuenta);
        var codigo=banco+sucursal+control+cuenta;
        var iban=calcularIbanEs(codigo);
        document.write("Su código de iban es " + iban);
      } else
        document.write("Cuenta no válida: 10 dígitos necesarios.");
    } else
      document.write("Sucursal no válida: 4 dígitos necesarios.");
  } else
    document.write("Banco no válido: 4 dígitos necesarios.");


}

function boton3() {
  var iban = prompt("Introduce el iban:");
  var correcto = comprobarIban(iban);
  if (correcto) {
    document.write("Correcto.");
  } else {
    document.write("Inorrecto.");
  }
}
