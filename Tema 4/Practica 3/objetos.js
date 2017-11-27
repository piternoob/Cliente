function crearObjeto(){
  var libro=new Object():
  libro.codigo="123456";
  libro.titulo="luna de pluton";
  libro.autor="bart simpson";
  libro.editorial="salamandra";
  libro.precio=4.5;
  libro.iva=10;
  libro.unidades=17;
  libro.pvp = function() {
    return this.precio-(this.precio*this.iva/100); };
  libro.compra = function(numero) {
    this.unidades+=numero; };
  libro.venta = function() {
    if(this.unidades<=0)
      return false;
    else {
      this.unidades--;
      return true;
    }}
    libro.PrecioCompra = function() {
      return 100*this.precio/145;
    }
}
