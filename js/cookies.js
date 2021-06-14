function guardarCookie(nombre,valor,fecha) {
    document.cookie = nombre+"="+valor+";expires="+fecha;
    }
caduca = "31 Dec 2021 23:59:59 GMT"
function guardar() {
    tuCookie = "pruebaCookie"
    tuValor = document.dato.miCookie.value
    guardarCookie(tuCookie,tuValor,caduca)	 
    }