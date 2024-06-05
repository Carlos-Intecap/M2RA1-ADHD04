//Mensaje que se muestra por cada diferente operación
var mensaje;
//Obtiene datos HTML y los guarda en un arreglo
//Solo obtiene datos númericos
//Problema (Número del problema)
//Cantidad (Cantidad de inputs que tiene la sección del problema)
function obtenerDatos(problema, cantidad) {
    var datos = [];
    for (var i = 1; i <= cantidad; i++) {
        var id = "input-p" + problema + "-" + i;
        var elemento = document.getElementById(id);
        if (elemento instanceof HTMLInputElement) {
            var valor = parseInt(elemento.value);
            datos.push(valor);
        }
    }
    return datos;
}
//Función exclusiva para obtener textos de HTML
function obtenerTexto(problema) {
    var id = "input-p" + problema + "-1";
    var texto = document.getElementById(id);
    if (texto instanceof HTMLInputElement) {
        var cadena = texto.value;
        return cadena;
    }
}
//Muestra el resultado de cada operación
//problema: Número del problema
//operación: Resultado final de la operación
//msj: Indica cual es el tipo de operación realizada
function mostrarResultado(problema, operacion, msj) {
    var id = "problema-" + problema + "-resultado";
    var resultado = document.getElementById(id);
    if (resultado) {
        if (operacion == "NaN" || operacion == "") {
            alert("Debes llenar todos los campos");
        }
        else
            [
                resultado.innerHTML = "El " + msj + " es: " + String(operacion)
            ];
    }
}
//Calcular Promedio
function problemaUno() {
    var datos = obtenerDatos(1, 3);
    var promedio = (datos[0] + datos[1] + datos[2]) / 3;
    mensaje = "promedio";
    mostrarResultado(1, String(promedio), mensaje);
}
//Calcular el área de un triángulo
function problemaDos() {
    var datos = obtenerDatos(2, 2);
    var area = (datos[0] * datos[1]) / 2;
    mensaje = "área";
    mostrarResultado(2, String(area), mensaje);
}
//Número par o impar
function problemaTres() {
    var datos = obtenerDatos(3, 1);
    var numero = datos[0];
    var rest;
    if (numero % 2 == 0) {
        rest = "Par";
    }
    else {
        rest = "Impar";
    }
    mensaje = "número";
    mostrarResultado(3, rest, mensaje);
}
//Número mayor y menor
function problemaCuatro() {
    var datos = obtenerDatos(4, 3);
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            if (datos[j] < datos[j + 1]) {
                var aux = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = aux;
            }
        }
    }
    var mayor = datos[0];
    var menor = datos[2];
    mensaje = "número mayor";
    var resp = mayor + " y el número menor es: " + menor;
    mostrarResultado(4, resp, mensaje);
}
function problemaCinco() {
    var datos = obtenerDatos(5, 2);
    var potencia = Math.pow(datos[0], datos[1]);
    mensaje = "número potenciado";
    mostrarResultado(5, String(potencia), mensaje);
}
//Potencia
function problemaSeis() {
    var texto = String(obtenerTexto(6));
    var txtInv = "";
    for (var i = texto.length; i > 0; i--) {
        txtInv += texto.charAt(i - 1);
    }
    mensaje = "texto invertido";
    mostrarResultado(6, txtInv, mensaje);
}
//Calcular factorial
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
//Obtiene y muestra los datos de factorial
function problemaSiete() {
    var datos = obtenerDatos(7, 1);
    var resp = factorial(datos[0]);
    mensaje = "factorial de " + datos[0];
    mostrarResultado(7, String(resp), mensaje);
}
//Número perfecto
function problemaOcho() {
    var numero = obtenerDatos(8, 1)[0];
    var divisores = [];
    var suma = 0;
    var resp = "";
    mensaje = "número";
    for (var i = numero - 1; i > 0; i--) {
        if (numero % i == 0) {
            divisores.push(i);
        }
    }
    divisores.forEach(function (divisor) {
        suma += divisor;
    });
    if (suma === numero) {
        resp = "Perfecto";
    }
    else {
        resp = "Imperfecto";
    }
    mostrarResultado(8, resp, mensaje);
}
//Determina si un número es primo
function primos(n) {
    if (n < 2) {
        return "No primo";
    }
    else if (n == 2) {
        return "Primo";
    }
    else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return "No primo";
            }
        }
        return "Primo";
    }
}
//Obtiene y muestra los datos para la función primos()
function problemaNueve() {
    var numero = obtenerDatos(9, 1)[0];
    var resp = String(primos(numero));
    mensaje = "número";
    mostrarResultado(9, resp, mensaje);
}
//Calcula las vocales existentes del texto
function problemaDiez() {
    var texto = String(obtenerTexto(10));
    var vocales = 0;
    var v = "";
    for (var i = 0; i < texto.length; i++) {
        v = String(texto.charAt(i));
        if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
            vocales++;
        }
    }
    mensaje = "número de vocales en el texto";
    mostrarResultado(10, String(vocales), mensaje);
    console.log(10);
}
