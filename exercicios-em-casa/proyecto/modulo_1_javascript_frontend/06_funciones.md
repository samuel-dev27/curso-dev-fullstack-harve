# Funciones

**Módulo:** Javascript Frontend - Aula 6
**Dificultad:** Intermedio
**Tiempo estimado:** 35 minutos
**Prerequisitos:** Variables (01_variables.md), Arrays (05_arrays.md)

## Introducción
Imagina que te levantas todos los días y tienes que decir la misma frase gigante de buenos días. Sería mucho más fácil tener un botón llamado "Saludar" que, al presionarlo, diga y haga todo automáticamente. 
En programación, a ese "botón de acciones pregrabadas" le llamamos **Funciones**.

Las Funciones son bloques de código reutilizable. Nos permiten escribir código complejo *una sola vez*, ponerle un nombre, y luego "llamar" o "invocar" ese nombre en lugar de copiar y pegar el código cientos de veces en nuestro programa. Éste es el último gran pilar fundamental de cualquier lenguaje de programación.

## Conceptos Teóricos
En JavaScript tradicional las funciones están compuestas de tres partes clave:
- **Declaración:** Avisar que estamos creando un comando. (Usamos `function`).
- **Parámetros (Argumentos):** Las funciones pueden ser "personalizadas". Los parámetros son las variables obligatorias u opcionales que le entregamos para que dicha función haga cálculos adaptados (Ej. Enviar tu nombre a la función Saludar).
- **Return (Retorno):** Una función casi siempre realiza un cálculo abstracto en el ciberespacio. Con la palabra clave `return`, le decimos a la función que "escupa" o nos devuelva un último valor final para nosotros poder guardarlo en una Variable en el exterior.

## 5 Ejemplos Progresivos

### Ejemplo 1: Función Básica
```javascript
// 1. DECLARAMOS la función. La guardamos temporalmente en la memoria.
function saludarAlUsuario() {
    console.log("¡Bienvenido al sistema!");
    console.log("Cargando sus datos...");
}

// 2. INVOCAMOS (Llamamos a que se ejecute) usando el nombre y los paréntesis extras ()
saludarAlUsuario();
saludarAlUsuario(); // Podemos re-usarlo cuantas veces necesitemos
```
**Explicación:** Declarar no hace absolutamente nada en pantalla. Es la 'Invocación' con los `()` al final lo que detona la orden.

### Ejemplo 2: Función con Parámetros
```javascript
// La variable 'nombre' entre paréntesis solo "vive" mientras se ejecuta esta función.
function saludarA(nombre) {
    console.log(`Hola, ¡qué gusto verte ${nombre}!`);
}

// Pasamos el Argumento / Valor "Laura" al parámetro "nombre"
saludarA("Laura"); 
saludarA("Carlos"); // Se adapta y reutiliza para cualquier texto.
```

### Ejemplo 3: Parámetros Múltiples y el `return`
```javascript
// Calculadora simple. Recibe 2 números.
function sumar(numeroA, numeroB) {
    let resultado = numeroA + numeroB;
    // Si no usas 'return', la función jamás nos devuelve la respuesta del cálculo hacia el exterior.
    return resultado; 
}

// Atrapamos la recompensa del "return" aquí afuera usando una variable.
let sumaFinal = sumar(10, 50); 
console.log(`Total facturado: $${sumaFinal}`); // Muestra: 60
```

### Ejemplo 4: Funciones Anónimas vs Funciones de Flecha (Arrow Functions)
```javascript
// Forma Antigua de "guardar funciones" (Function Expression)
const restarAntiguo = function(a, b) {
    return a - b;
};

// Forma MODERNA (Arrow Functions o Funciones de Flecha) - ¡MUY USADAS HOY!
const restarModerno = (a, b) => {
    return a - b;
};

// O incluso más cortas: One-Line Arrow Function con "Return Implícito" 
const restarUltraModerno = (a, b) => a - b;
```
**Explicación:** Las Arrow Functions pierden la palabra clave `function` a favor del símbolo `=>`. Fueron creadas en 2015 para verse más limpias, cortas y resolver algunos problemas de alcance (`this` context).

### Ejemplo 5: Funciones como "Callbacks" o recibiendo Arrays
```javascript
const asistentes = ["Hugo", "Paco", "Luis"];

function imprimirNombreEnMayusculas(nombre) {
    console.log(`El invitado se llama: ${nombre.toUpperCase()}`);
}

// Usamos el método forEach. OJO, no le pasamos los (), pasamos el molde por defecto.
asistentes.forEach(imprimirNombreEnMayusculas);
```
**Explicación:** Esto se llama Callback (Llamada de vuelta). Le prestamos el nombre de nuestra función a otra herramienta de JavaScript para que ella misma se encargue de ejecutarla por detrás en el momento adecuado. 

## ⚠️ Antiguo vs Moderno

Antes de 2015 todo era `function` para todos lados. Si bien la palabra tradicional sigue viva y es 100% válida, hoy reinan las "Arrow Functions" `() => {}` para trabajos más rápidos, como enviarle minúsculas instrucciones dentro de Array methods (`.map()`, `.filter()`).

## 💼 Aplicación Profesional

### Frontend: Botones y Click en UI
```javascript
const botonLogin = document.getElementById("loginBtn");

// Esta Arrow Function enorme es la lógica que dictamina qué pasa si dan clic.
const procesarIngreso = () => {
   showLoadingSpinner();
   let datos = obtenerUsuarioYPass();
   enviarAlServidor(datos);
};
```

### Backend: Procesar Impuestos Dinámicos
```javascript
// Función reutilizable en todos los carritos del sistema
function calcularPrecioCompleto(monto, paisDestino) {
    if (paisDestino === "AR") return monto * 1.21;
    if (paisDestino === "CL") return monto * 1.19;
    return monto;
}

let cobrarArgentino = calcularPrecioCompleto(5000, "AR");
```
**Frecuencia de Uso:** ⭐⭐⭐⭐⭐ De forma continua. Todo gran proyecto es, simplemente, un centenar de pequeñas y diminutas funciones interactuando como engranajes de un reloj.

## ⚠️ Errores Comunes

### Error 1: Olvidarse los paréntesis al llamar
- **Código incorrecto:** `saludarAlUsuario;` -> Esto no corre el programa, simplemente devuelve y se lee asimismo sin hacer nada.
- **Solución:** ¡Grita la orden! Siempre `()`: `saludarAlUsuario();`

### Error 2: El fatídico olvido del Retorno (`return`)
- **Problema:** 
```javascript
function calcularEdad(anioNacimiento) {
     let edad = 2024 - anioNacimiento;
     // Faltó el return edad;
}
console.log(calcularEdad(1995)); // Imprimirá "undefined"
```
- **Solución:** Las funciones se tragan tus datos a la nada misma si al final del proceso no colocas un gran y hermoso `return TUDATOFINAL`.

### Error 3: El Scope (o Variables asfixiadas)
- **Concepto:** Las variables declaradas CON `let` O `const` ADENTRO de una función, jamás pueden ser leídas desde afuera en la raíz principal. Están confinadas eternamente a la seguridad de la función. No intentes leer variables atrapadas allí.

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Saludos formales:
- Declara una función "tradicional" llamada `generarSaludoFormal(nombre, titulo)`.
- Haz que te haga un *return* de un Template String diciendo "Estimado/a `titulo` `nombre`, ¡bienvenido/a!".
- Haz un `console.log()` de la ejecución de tu función comprobando tu nombre. Ejemplo de uso correcto: `generarSaludoFormal("Laura", "Licenciada")`.

### Nivel 2: Intermedio
Calculadora de IVA Ultra-compacta:
- Usa sintaxis de "Arrow Function implícita ultra moderna de una línea" vista en el ejemplo 4.
- Recibe un solo monto. Debe devolverte el mismo monto multiplicado por `1.15`.
- Asigna o guarda su resultado en una Constante e impríme en pantalla tu cálculo.

### Nivel 3: Avanzado
El Filtro de Spam de Palabras Prohibidas.
Vas a unir Listas, Bucles y Funciones:
- Crea una función `validarComentarioSeguro(comentarioTexto)`.
- Adentro usaremos tres operadores `if` o `||`: Verifica si el `comentarioTexto` incluye las palabras "viagra", o "sorteo" o "robo". PISTA: Usa el método nativo (si no lo sabés búscalo en Google) `.includes("tuPalabra")`.
- Si contiene alguna, debe retornar `false` (no es seguro). Si no contiene ninguna, debe retornar `true` (es seguro).
- Escribe una función de prueba aparte usando console.

## ✅ Checklist de Comprensión
- [ ] Entiendo que `function` declara o enseña algo sin ejecutarlo aún.
- [ ] Entiendo cómo invocar una función usando los `()`.
- [ ] Me quedó de memoria qué son los Parámetros.
- [ ] Comprendo profundamente por qué usar la palabra fundamental `return` al fin del bloque.
- [ ] Ejecuté satisfactoriamente y aprendí la sintaxis de la moderna Arrow Function (`() =>`).

## 📚 Recursos Adicionales
- [MDN: Funciones en la Guía de JS](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions)
- [JS.Info: Arrow Functions y Funciones normales](https://es.javascript.info/function-basics)
