//Mensaje que se muestra por cada diferente operación
let mensaje:string;

//Obtiene datos HTML y los guarda en un arreglo
//Solo obtiene datos númericos
//Problema (Número del problema)
//Cantidad (Cantidad de inputs que tiene la sección del problema)
function obtenerDatos(problema:number,cantidad:number) {
    let datos:number[] = [];
    for(let i=1;i<=cantidad;i++) {
        let id:string = "input-p"+problema+"-"+i;
        let elemento = document.getElementById(id);
        if (elemento instanceof HTMLInputElement) {
            let valor:number = parseInt(elemento.value);
            datos.push(valor);
        }
    }
    return datos;
}

//Función exclusiva para obtener textos de HTML
function obtenerTexto(problema:number) {
    let id:string = "input-p"+problema+"-1";
    let texto = document.getElementById(id);
    if (texto instanceof HTMLInputElement) {
        let cadena:string = texto.value;
        return cadena;
    }
}

//Muestra el resultado de cada operación
//problema: Número del problema
//operación: Resultado final de la operación
//msj: Indica cual es el tipo de operación realizada
function mostrarResultado(problema:number,operacion:string,msj:string) {
    let id:string = "problema-"+problema+"-resultado";
    const resultado = document.getElementById(id)
    if(resultado){
        if (operacion=="NaN"||operacion=="") {
            alert("Debes llenar todos los campos")
        } else [
            resultado.innerHTML="El "+msj+" es: "+String(operacion)
        ]
    }
}

//Calcular Promedio
function problemaUno() {
    let datos:number[] = obtenerDatos(1,3);
    let promedio:number = (datos[0]+datos[1]+datos[2])/3;
    mensaje = "promedio";
    mostrarResultado(1,String(promedio),mensaje);
}

//Calcular el área de un triángulo
function problemaDos() {
    let datos:number[] = obtenerDatos(2,2);
    let area:number = (datos[0]*datos[1])/2;
    mensaje = "área";
    mostrarResultado(2,String(area),mensaje);
}

//Número par o impar
function problemaTres() {
    let datos:number[] = obtenerDatos(3,1);
    let numero:number = datos[0];
    let rest:string;
    if (numero%2==0) {
        rest = "Par";
    } else {
        rest = "Impar";
    }
    mensaje = "número";
    mostrarResultado(3,rest,mensaje)
}

//Número mayor y menor
function problemaCuatro() {
    let datos:number[] = obtenerDatos(4,3);
    for (let i=0;i<2;i++) {
        for (let j=0;j<2;j++) {
            if (datos[j]<datos[j+1]) {
                let aux:number = datos[j];
                datos[j]=datos[j+1]
                datos[j+1]=aux
            }
        }
    }
    let mayor:number = datos[0];
    let menor:number = datos[2];
    mensaje = "número mayor";
    let resp:string = mayor+" y el número menor es: "+menor
    mostrarResultado(4,resp,mensaje);
}

function problemaCinco() {
    let datos:number[] = obtenerDatos(5,2);
    let potencia:number = datos[0]**datos[1];
    mensaje = "número potenciado";
    mostrarResultado(5,String(potencia),mensaje);
}

//Potencia
function problemaSeis() {
    let texto:string = String(obtenerTexto(6));
    let txtInv:string = "";
    for(let i=texto.length;i>0;i--) {
        
        txtInv += texto.charAt(i-1);
    }
    mensaje = "texto invertido"
    mostrarResultado(6,txtInv,mensaje)
}

//Calcular factorial
function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

//Obtiene y muestra los datos de factorial
function problemaSiete() {
    let datos:number[] = obtenerDatos(7,1);
    let resp:number = factorial(datos[0]);
    mensaje = "factorial de "+datos[0];
    mostrarResultado(7,String(resp),mensaje);
}

//Número perfecto
function problemaOcho() {
    let numero:number = obtenerDatos(8,1)[0];
    let divisores:number[] = [];
    let suma:number = 0;
    let resp:string = ""
    mensaje = "número"
    for (let i=numero-1;i>0;i--) {
        if (numero%i==0) {
            divisores.push(i);
        }
    }
    divisores.forEach(function(divisor) {
        suma += divisor;
    });
    if (suma===numero) {
        resp = "Perfecto"
    } else {
        resp = "Imperfecto"
    }
    mostrarResultado(8,resp,mensaje);
}

//Determina si un número es primo
function primos(n:number) {
    if (n<2){
        return "No primo"
    } else if (n==2) {
        return "Primo"
    } else {
        for (let i=2;i<n;i++) {
            if (n%i==0) {
                return "No primo"
            } 
        } return "Primo"
    }
}

//Obtiene y muestra los datos para la función primos()
function problemaNueve() {
    let numero:number = obtenerDatos(9,1)[0];
    let resp:string = String(primos(numero))
    mensaje = "número"
    mostrarResultado(9,resp,mensaje);
}

//Calcula las vocales existentes del texto
function problemaDiez() {
    let texto:string = String(obtenerTexto(10));
    let vocales:number = 0;
    let v:string = "";
    for(let i=0;i<texto.length;i++) {
        v = String(texto.charAt(i));
        if (v=="a"||v=="e"||v=="i"||v=="o"||v=="u") {
            vocales++;
        }
    }
    mensaje = "número de vocales en el texto"
    mostrarResultado(10,String(vocales),mensaje)
    console.log(10);
}