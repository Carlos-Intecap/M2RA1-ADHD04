# ADHD04
## INTECAP
- Fecha: 03/06/2024
- Carrera: Desarrollador Fullstack
- Modulo 2: Actividad para desarrollar habilidades y destrezas

|Carnet|Nombre|
|------|------|
|2018-027303|Carlos Tavico|

## Preguntas
1. **¿Qué es JavaScript?**
> Es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript que agrega tipos estáticos opcionales al lenguaje, lo que permite a lo desarrolladores detectar errores en el código durante el desarrollo en lugar de en tiempo de ejecución
2. **¿Qué ventajas ofrece TypeScript frente a JavaScript puro?**
> TypeScript ofrece varias ventajas frente a JavaScript puro, especialmente en proyectos grandes y complejos. Aquí hay algunas de las principales ventajas:
* Tipado Estático
* Mejoras en las herramientas de Desarrollo
* Compatibilidad con ECMAScript Moderno
* Programación Orientada a Objetos
* Mantenimiento y Escalabilidad
* Integración Gradual
3. **¿Cómo se instala TypeScript en VSCode?**
* Instalar Node.js y npm: Se puede descargar Node.js desde la página [nodejs.org](https://nodejs.org/). La instalación de Node.js también incluye npm.
* Instalar TypeScript Globalmente. Se abre una terminal y se ejectua el siguente comando para instalar TypeScript globalmente en el sistema:
```sh
npm install -g typescript
```
* Verificar la instalación de TypeScript: Para asegurarse de que TypeScript se ha instalado correctamente, se puede verificar la versión instalada ejecutando:
```sh
tsc -v
```
* Crear un proyecto TypeScript: Se crea un nuevo directorio para el proyecto y se navega a él desde la terminal: 
```sh
mkdir mi-proyecto-typescript
cd mi-proyecto-typescript
```
* Inicializar un proyecto TypeScript: Se inicializa un archivo TypeScript ('tsconfig.json') ejecutando:
```sh
tsc --init
```
> Este comando creará un archivo 'tsconfig.json' en el directorio del proyecto, que se utiliza para cofigurar el compilador TypeScript.
* Configurar VSCode: Se abre el proyecto con VSCode:
```sh
code .
```
4. **¿Cómo se compila un archivo TypeScript para convertirlo a JavaScript?**
> Se crea un archivo TypeScript en el proyecto. Por ejemplo, se crea un archivo 'index.ts' con el siguiente contenido:
```sh
const saludo: string = "Hola, TypeScript!";
console.log(saludo);
```
> Para compilar el archivo TypeScript a JavaScript, se abre la terminal integrada en VSCoDe y se ejecuta:
```sh
tsc
```
> Este comando compilará todos los archivos TypeScript en el proyecto (basándose en la configuración del 'tsconfig.jason') y generará los archivos JavaScript correspondientes. Después de compilar, se puede ejectuar el archivo JavaScript resultante usando Node.js:
```sh
node index.js
```
5. **¿Qué extensión de archivo se utiliza para los archivos TypeScript?**
> TypeScript utiliza la extensión 'archivo.**ts**'.
6. **¿Cómo se define un tipo de dato en TypeScript?**
> En TypeScript, definir tipos de datos es una de las caracteríticas clave que lo diferencia de JavaScript. Se puede definir tipos de datos para variables, parámetros de funciones, propiedades de objetos y más. A continuación se presentan varias formas comunes de definir tipos de datos en TypeScript.
* Tipos primitivos: Se pueden especificar tipos primitivos como 'string', 'number', 'boolean', entre otros.
```sh
let nombre: string = "Nombre";
let edad: number = 25;
let esEstudiante: boolean = true;
```
* Tipos de arreglo: Se pueden definir tipos para arreglos de elmentos.
```sh
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ["Juan", "Maria", "Pedro"];
```
* Tipos de tupla: Una tupla permite definir un arreglo con un número fijo de elementos de tipos específicos.
```sh
let persona: [string, number];
persona = ["Juan", 25]; // Correcto
// persona = [25, "Juan"]; // Error
```
* Tipos de objeto: Se pueden definir tipos para objetos usando una sintaxis similar a JSON.
```sh
let persona: { nombre: string; edad: number };
persona = { nombre: "Juan", edad: 25 };
```
* Tipos de función: Se puede definir tipos de los parámetros y el tipo de retorno de las funciones.
```sh
function saludar(nombre: string): string {
    return "Hola, " + nombre;
}
```
* Tipos de intersección: Combina múltiples tipos en uno solo.
```sh
type Persona = { nombre: string };
type Trabajador = { salario: number };

let empleado: Persona & Trabajador;
empleado = { nombre: "Juan", salario: 50000 };
```
* Interfaces: Permiten definir la forma de un objeto.
```sh
interface Persona {
    nombre: string;
    edad: number;
}

let usuario: Persona = { nombre: "Juan", edad: 25 };
```
7. **¿Qué son los tipos de unión y cómo se declaran?**
> Los tipos de unión permiten que una variable tenga más de un tipo posible. Se declaran de la siguiente forma:
```sh
let id: number | string;
id = 101; // Correcto
id = "A101"; // Correcto
// id = true; // Error
```
8. **¿Qué es un tipo literal en TypeScript y para qué se utiliza?**
> Un tipo literal es un tipo de datos que pueden tener solo uno de un conjunto finito de valores específicos. Puede ser un literal de cadena, número o booleano. Se utilizan en combinación con tros tipos para crear tipos más específicos y seguros.
```sh
let direccion: "izquierda" | "derecha" | "arriba" | "abajo";
direccion = "izquierda"; // Correcto
// direccion = "centro"; // Error: "centro" no es un valor permitido
```
9. **¿Qué son los tipos enumerados (Enums) y cómo se crean?**
> Los enums permiten definir un conjunto de valores con nombre. Se declaran de la siguiente forma:
```sh
enum Color {
    Rojo,
    Verde,
    Azul
}

let colorFavorito: Color = Color.Azul;
```
10. **¿Cómo se define un tipo alias cuándo es útil?**
> Tipos personalizados o tipo alias se pueden crear para un tipo espefícifico usando 'type'.
```sh
type ID = number | string;

let usuarioID: ID;
usuarioID = 101; // Correcto
usuarioID = "A101"; // Correcto
```
> Es útil en varias situaciones donde se busca mejorar la claridad, reutilización y mantenimiento del código.
11. **¿Cómo se definen las funciones con tipos en TypeScript?**
> En TypeScript, se puede definir los tipos para las funciones de manera explícita, lo que incluye los tipos de los parámetros y el tipo de retorno. Esto proporciona mayor seguridad de tipos y ayuda a prevenir errores.
```sh
function sumar(a: number, b: number): number {
    return a + b;
}

let resultado = sumar(5, 3); // Correcto: resultado es de tipo number
// sumar("5", "3"); // Error: los parámetros deben ser de tipo number
```
12. **¿Qué son los parámetros opcionales y los parámetros predeterminados en funciones?**
> Son características que permiten definir funciones más flexibles y robustas.
* Parámetros Opcionales: Son aquellos que no necesitan ser proporcionados cuando se llama a la función. Se indican usando un signo de interrogación '?' después del nombre del parámetro en la definición de la función. Ejemplo:
```sh 
function saludar(nombre: string, saludo?: string): string {
    return saludo ? `${saludo}, ${nombre}` : `Hola, ${nombre}`;
}

console.log(saludar("Juan")); // "Hola, Juan"
console.log(saludar("Juan", "Buenos días")); // "Buenos días, Juan"
```
> En este ejemplo, el parámetro 'saludo' es opcional. Si no se proporciona, la función 'saludar' usará una cadena predeterminada para el saludo.
* Parámetros con valores predeterminados: Son aquellos que tienen un valor asignado por defecto en caso de que no se proporcione un valor durante la llamada a la función. Se definen asignando un valor al parámetro en la firma de la función. Ejemplo:
```sh
function potencia(base: number, exponente: number = 2): number {
    return Math.pow(base, exponente);
}

console.log(potencia(3)); // 9 (3^2)
console.log(potencia(3, 3)); // 27 (3^3)
```
> En este ejemplo, el parámetro 'exponente' tiene un valor predeterminado de '2'. Si no se proporciona un valor para 'exponente' durante la llamada a la función, se usará '2'.
13. **¿Cuáles son algunas mejores prácticas para escribir código limpio y mantenible en TypeScript?**
> Escribir código limpio y mantenible en TypeScript no solo mejroa la calidad del software, sino que también facilita su mantenimiento y evolución a largo plazo. Algunas prácticas para lograr esto son:
* Utilizar tipos fuertemente
* Usar interfaces y tipos personalizados
* Aprovechar las funciones de TypeScript
* Escribir funciones pequeñas y específicas
* Usar nombres claros y descriptivos
* Comentar el código con moderación
* Seguir un estilo consistente
* Evitar el uso de 'any' siempre que sea posible
* Usar modulos y separar el código en archivos
* Escribir pruebas unitarias
* Documentar con JSDoc y TypeDoc

## Problemas
1. Calcular el promedio de tres números ingresados.
2. Calcular el área de un triángulo, el usuario debe ingresar el valor para la base y altura.
3. Determinar si un número es par o impar.
4. Encontrar el mayor y menor de tres números ingresados.
5. Elevar un número a una potencia, los valores deben ser ingresados por el usuario.
6. Mostrar de forma inversa un texto ingresado por el usuario.
7. Calcular el factorial de un número ingresado.
8. Indicar si un valor ingresado es un número perfecto.
9. Verificar si un valor ingresado es un número primo.
10. Contar las vocales existentes en un texto ingresado.