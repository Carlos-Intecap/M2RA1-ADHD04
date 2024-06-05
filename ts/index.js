"use strict";
let mensaje;
function obtenerDatos(problema, cantidad) {
    let datos = [];
    for (let i = 1; i <= cantidad; i++) {
        let id = "input-p" + problema + "-" + i;
        let elemento = document.getElementById(id);
        if (elemento instanceof HTMLInputElement) {
            let valor = parseInt(elemento.value);
            datos.push(valor);
        }
    }
    return datos;
}
function obtenerTexto(problema) {
    let id = "input-p" + problema + "-1";
    let texto = document.getElementById(id);
    if (texto instanceof HTMLInputElement) {
        let cadena = texto.value;
        return cadena;
    }
}
function mostrarResultado(problema, operacion, msj) {
    let id = "problema-" + problema + "-resultado";
    const resultado = document.getElementById(id);
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
function problemaUno() {
    let datos = obtenerDatos(1, 3);
    let promedio = (datos[0] + datos[1] + datos[2]) / 3;
    mensaje = "promedio";
    mostrarResultado(1, String(promedio), mensaje);
}
function problemaDos() {
    let datos = obtenerDatos(2, 2);
    let area = (datos[0] * datos[1]) / 2;
    mensaje = "área";
    mostrarResultado(2, String(area), mensaje);
}
function problemaTres() {
    let datos = obtenerDatos(3, 1);
    let numero = datos[0];
    let rest;
    if (numero % 2 == 0) {
        rest = "Par";
    }
    else {
        rest = "Impar";
    }
    mensaje = "número";
    mostrarResultado(3, rest, mensaje);
}
function problemaCuatro() {
    let datos = obtenerDatos(4, 3);
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            if (datos[j] < datos[j + 1]) {
                let aux = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = aux;
            }
        }
    }
    let mayor = datos[0];
    let menor = datos[2];
    mensaje = "número mayor";
    let resp = mayor + " y el número menor es: " + menor;
    mostrarResultado(4, resp, mensaje);
}
function problemaCinco() {
    let datos = obtenerDatos(5, 2);
    let potencia = datos[0] ** datos[1];
    mensaje = "número potenciado";
    mostrarResultado(5, String(potencia), mensaje);
}
function problemaSeis() {
    let texto = String(obtenerTexto(6));
    let txtInv = "";
    for (let i = texto.length; i > 0; i--) {
        txtInv += texto.charAt(i - 1);
    }
    console.log(txtInv);
    mensaje = "texto invertido";
    mostrarResultado(6, txtInv, mensaje);
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
function problemaSiete() {
    let datos = obtenerDatos(7, 1);
    let resp = factorial(datos[0]);
    mensaje = "factorial de " + datos[0];
    mostrarResultado(7, String(resp), mensaje);
}
function problemaOcho() {
    let numero = obtenerDatos(8, 1)[0];
    let divisores = [];
    let suma = 0;
    let resp = "";
    mensaje = "número";
    for (let i = numero - 1; i > 0; i--) {
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
