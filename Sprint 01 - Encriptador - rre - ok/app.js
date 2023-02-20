
function encriptarTexto(){

    var encriptar = true;

    mostrarTextoEncriptado();
    procesarPeticion(encriptar);
}

function desencriptarTexto(){

    var encriptar = false;

    mostrarTextoEncriptado();
    procesarPeticion(encriptar);
}

function mostrarTextoEncriptado(){

    var texto = document.getElementById("textoInicial").value;

    if(texto === ""){

        document.getElementById("textoEncriptado").style.display = 'none';
        document.getElementById("sinTexto").style.display = 'inline';

    }
    else{

        document.getElementById("textoEncriptado").style.display = 'inline';
        document.getElementById("sinTexto").style.display = 'none';

    }
}

function procesarPeticion(encriptar){

    var cadena = document.getElementById("textoInicial").value;     

    document.getElementById("textoFinal").value = procesarTexto(cadena.toLowerCase(), encriptar);
    document.getElementById("textoInicial").value = "";
}

function procesarTexto(cadena, encriptar){

    var nuevaCadena = "";

    if(encriptar){

        nuevaCadena =cadena.replaceAll(/e/g,"enter");
        nuevaCadena = nuevaCadena.replaceAll(/i/g,"imes");
        nuevaCadena = nuevaCadena.replaceAll(/a/g,"ai");  
        nuevaCadena = nuevaCadena.replaceAll(/o/g,"ober");
        nuevaCadena = nuevaCadena.replaceAll(/u/g,"ufat"); 

    }
    else{        

        nuevaCadena = cadena.replaceAll(/ufat/g,"u"); 
        nuevaCadena = nuevaCadena.replaceAll(/ober/g,"o");
        nuevaCadena = nuevaCadena.replaceAll(/ai/g,"a");
        nuevaCadena = nuevaCadena.replaceAll(/imes/g,"i");
        nuevaCadena = nuevaCadena.replaceAll(/enter/g,"e");

    }

    return nuevaCadena;
}

function copiarTextoFinal(){

    var texto = document.getElementById("textoFinal");

    texto.select(); 
    document.execCommand('copy');
}