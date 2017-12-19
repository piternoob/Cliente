class Tienda(){
	constructor(numTienda, capSocial, fechAp, anoIni){
		this.numTienda=parseInt(numTienda);
		this.capSocial=parseFloat(capSocial);
		this.fechAp=new Date(fechAp);
		this.anoIni=parseInt(anoIni);
	}
	get anoIni(){
		return anoIni;
	}
	fechIni(){
		return fechAp.getDay()+"/"+fechAp.getMonth()+"/"+fechAp.getFullYear();
	}
}

class Almacen() extends Tienda{
	constructor(numTienda, capSocial, fechAp, anoIni, fiscal, facturacion, tipo, numArt, pmArt, facturado, fechRe){
		super(numTienda, capSocial, fechAp, anoIni);
		this.fiscal=fiscal;
		this.facturacion=parseFloat(facturacion);
		this.tipo=parseInt(tipo);
		this.numArt=parseInt(numArt);
		this.pmArt=parseFloat(pmArt);
		this.facturado=parseFloat(facturado);
		this.fechRe=new Date(fechRe);
	}
}