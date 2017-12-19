function ejercicio7(){
	if (navigator.userAgent.indexOf("Firefox") != -1) {
        alert("Estas utilizando el navegador Mozilla Firefox. Version: "+navigator.appVersion");
    } else if (navigator.userAgent.indexOf("MSIE") != -1) {
        alert("Estas utilizando el navegador Internet Explorer. Version: "+navigator.appVersion");
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        alert("Estas utilizando el navegador Google Chrome. Version: "+navigator.appVersion);
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
		alert("Estas utilizando el navegador Apple Safari. Version: "+navigator.appVersion");
    } else if (navigator.userAgent.indexOf("Opera") != -1) {
        alert("Estas utilizando el navegador Opera. Version: "+navigator.appVersion");
    } else if (navigator.userAgent.indexOf("OPR") != -1) {
        alert("Estas utilizando el navegador Opera. Version: "+navigator.appVersion");
    } else if (navigator.userAgent.indexOf(".NET CLR ") != -1) {
        alert("Estas utilizando el navegador Internet Explorer. Version: "+navigator.appVersion");
    }
	  
	alert("Ancho del navegador: "+window.innerWidth+".");
	alert("Alto del navegador: "+window.innerHeight+".");
    
	alert("Anchura de la pantalla: "+screen.availWidth+".");
	alert("Altura de la pantalla: "+screen.availHeight+".");
}