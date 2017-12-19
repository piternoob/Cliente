function ejercicio3(){
	var codEmpresa=prompt("Introduce el codigo de la empresa:");
	var denominacion=prompt("Introduce la denominacion de la empresa:");
	var cif=prompt("Introduce el cif de la empresa:");
	var obj1= new inicio(codEmpresa, denominacion, cif);
	
	codEmpresa=prompt("Introduce el codigo de la empresa:");
	denominacion=prompt("Introduce la denominacion de la empresa:");
	cif=prompt("Introduce el cif de la empresa:");
	var obj2= new inicio(codEmpresa, denominacion, cif);

	var array=new Array(obj1, obj2);
	
	var buscar=prompt("Introduce el código de la empresa a buscar:");
	for(var i=0; i<array.length; i++){
		if(array[i].codEmpresa==buscar){
			alert("Codigo de la empresa: "+array[i].codEmpresa);
			alert("Denominacion de la empresa: "+array[i].denominacion);
			alert("Cif de la empresa: "+array[i].getCif);
		}
	}
}

function inicio(codEmpresa, denominacion, cif){
	this.codEmpresa=parseInt(codEmpresa);
	this.denominacion=denominacion;
	this.cif=cif;
	this.__defineGetter__("getCif", function (){
		return this.cif;
	});
	this.__defineSetter__("setCif", function (nuevo){
		this.cif=nuevo;
	});
}

function empresa(codEmpresa, denominacion, cif, fecha, capital, tipo, numSocios, capitalSocios, sueldoMensual){
	inicio.call(this, codEmpresa, denominacion, cif);
	this.fecha=new Date(fecha);
	this.capital=parseFloat(capital);
	this.tipo=tipo;
	this.numSocios=parseInt(numSocios);
	this.capitalSocios=parseFloat(capitalSocios);
	this.sueldoMensual=parseFloat(sueldoMensual);
	this.__defineSetter__("setCapital", function (nuevo){
		this.capital=nuevo;
	});
	
	this.__defineGetter__("getTipo", function (){
		return this.tipo;
	});
	
	this.__defineSetter__("setTipo", function (nuevo){
		this.tipo=nuevo;
	});
	
	this.__defineGetter__("getCapitalSocios", function (){
		return this.capital/this.numSocios;
	});

	this.anualidad=function(irpf, ss){
		var dinero=this.sueldoMensual*14;
		return dinero-dinero*irpf/100-dinero*ss/100;
	}
}

empresa.prototype.precioAccion=parseFloat(24);

empresa.prototype.accionesSocio=parseInt(24);
empresa.prototype.__defineGetter__("getAccionesSocio", function (){
	return empresa.prototype.accionesSocio;
});
empresa.prototype.__defineSetter__("setAccionesSocio", function (nuevo){
	empresa.prototype.accionesSocio=nuevo;
});

empresa.prototype.verCapital=function(conversion){
	return empresa.prototype.capital*conversion;
}