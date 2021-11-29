function tomarDatos(e){

    e.preventDefault();
    var uno = document.getElementById("uno").value;
    var dos = document.getElementById("dos").value;

    var operador = document.getElementById("operador").value;
    if(operador == "suma"){
        var resultado = parseInt(uno) + parseInt(dos);
    }
    if(operador == "resta"){
        var resultado = parseInt(uno) - parseInt(dos);
    }
    if(operador == "multiplicacion"){
        var resultado = parseInt(uno) * parseInt(dos);
    }
    if(operador == "division"){
        var resultado = parseInt(uno) / parseInt(dos);
    }
    if(operador == "potencia"){
        var resultado =Math.pow(parseInt(uno),parseInt(dos));
    }
    if(operador == "raiz"){
        var resultado =Math.sqrt(parseInt(uno));
    }
    document.querySelector("h2").textContent= resultado;
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",tomarDatos);
                                    