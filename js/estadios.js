function mostrarSugerencia(str) {
    var estadioElegido='';
    if (str=='calderon') {estadioElegido='Vicente';}
    else if (str=='benito') {estadioElegido='Benito';}
    else if (str=='anfield') {estadioElegido='Anfield';}
    else {estadioElegido='none';}
    
    var xmlhttp;
    if (str.length==0 ||estadioElegido=='none') { document.getElementById("txtInformacion").innerHTML="No hay ningún estadio elegido";
    mostrarEstadios(); return; }
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var jsonResponse = xmlhttp.responseText;
        var objeto_json = JSON.parse(jsonResponse);
        estadiosRecibidos = objeto_json.listadoEstadios.estadio;
     
        for (var i=0; i<estadiosRecibidos.length;i++) {
        var nombreEstadio = objeto_json.listadoEstadios.estadio[i].nombre;
            if (nombreEstadio==estadioElegido) {
            document.getElementById("txtInformacion").innerHTML = 'El estadio elegido en la lista es '+nombreEstadio+ ' y tiene indice '+i;
            var informacionEstadio = objeto_json.listadoEstadios.estadio[i].Informacion;
            mostrarEstadios(informacionEstadio);
            }
        }
        
    }
    }
    
    xmlhttp.open("GET","listadoEstadios.json?nocache=' + (new Date()).getTime()");
    xmlhttp.send();
    }
    
    function mostrarEstadios (arrayInformacion) {
    var nodoMostrarResultados = document.getElementById('listaInformacion');
    if (!arrayInformacion) {nodoMostrarResultados.innerHTML = ''; return}
    var contenidosAMostrar = '';
    for (var i=0; i<arrayInformacion.length;i++) {
        contenidosAMostrar = contenidosAMostrar+'<div id="estadios'+i+'">';
        contenidosAMostrar += '<a href="https://es.wikipedia.org/wiki/Anexo:Estadios_de_f%C3%BAtbol_en_Europa">' +arrayInformacion[i]+ '</a></div>';
    }
    if (contenidosAMostrar) {nodoMostrarResultados.innerHTML = contenidosAMostrar;}
    }