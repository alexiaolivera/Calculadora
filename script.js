 var bsuma = document.getElementById("bsuma");

    bsuma.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("suma");
    });

var bresta = document.getElementById("bresta");

    bresta.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("resta");
    });

var bdivision = document.getElementById("bdivision");

    bdivision.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("division");
    });

var bmultiplicacion = document.getElementById("bmultiplicacion");

    bmultiplicacion.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("multiplicacion");
    });

var bpotencia = document.getElementById("bpotencia");

    bpotencia.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("potencia");
    });

var braiz = document.getElementById("braiz");

    braiz.addEventListener("click", function(e){
        e.preventDefault();    
        resolver("raiz");
    });

var historial = "";
var contador = 0;
var btnBorrarHistorial = document.getElementById("btnBorrarHistorial");
btnBorrarHistorial.addEventListener("click", function(e){
    e.preventDefault();
    contador = 0;
    historial = "";
    document.getElementById("historial").innerHTML = historial = "";;
    document.getElementById("resultado").textContent = "";
});

function resolver(operacion){
    var uno = parseFloat(document.getElementById("uno").value);
    var dos = parseFloat(document.getElementById("dos").value);
    var resultado = 0;

    switch(operacion){
        case "suma":
            resultado = uno + dos;
            contador++;
            historial = historial+ contador+") " + uno + " + " + dos + " = " + resultado + "<br>";
            break;

        case "resta":
            contador++;
            resultado = uno - dos;
            historial = historial + contador+") " + uno + " - " + dos + " = " + resultado + "<br>";
            break;

        case "multiplicacion":
            contador++;
            resultado = uno * dos;
            historial = historial + contador+") " + uno + " * " + dos + " = " + resultado + "<br>";
            break;

        case "division":
            contador++;
            resultado = uno / dos;
            historial = historial + contador+") " + uno + " / " + dos + " = " + resultado + "<br>";
            break;

        case "potencia":
            contador++;
            resultado = Math.pow(uno, dos);
            historial = historial + contador+") " + uno + " ^ " + dos + " = " + resultado + "<br>";
            break;

        case "raiz":
            contador++;
            resultado = Math.pow(uno, 1/dos);
            historial = historial + contador+") " + dos +"√" + uno + " = " + resultado + "<br>";
            break;
    }
    console.log(historial);
    document.getElementById("historial").innerHTML = historial;
    document.getElementById("resultado").textContent = resultado;
}