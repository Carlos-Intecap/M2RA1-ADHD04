let mensaje:string;

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

function obtenerTexto(problema:number) {
    let id:string = "input-p"+problema+"-1";
    let texto = document.getElementById(id);
    if (texto instanceof HTMLInputElement) {
        let cadena:string = texto.value;
        return cadena;
    }
}

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

function problemaUno() {
    let datos:number[] = obtenerDatos(1,3);
    let promedio:number = (datos[0]+datos[1]+datos[2])/3;
    mensaje = "promedio";
    mostrarResultado(1,String(promedio),mensaje);
}

function problemaDos() {
    let datos:number[] = obtenerDatos(2,2);
    let area:number = (datos[0]*datos[1])/2;
    mensaje = "área";
    mostrarResultado(2,String(area),mensaje);
}

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

function problemaSeis() {
    let texto:string = String(obtenerTexto(6));
    let txtInv:string = "";
    for(let i=texto.length;i>0;i--) {
        
        txtInv += texto.charAt(i-1);
    }
    console.log(txtInv)
    mensaje = "texto invertido"
    mostrarResultado(6,txtInv,mensaje)
}

function factorial(n: number): number {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

function problemaSiete() {
    let datos:number[] = obtenerDatos(7,1);
    let resp:number = factorial(datos[0]);
    mensaje = "factorial de "+datos[0];
    mostrarResultado(7,String(resp),mensaje);
}

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
