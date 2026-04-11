# Variables en JavaScript
**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 20 minutos
**Prerequisitos:** Ninguno

## Introducción
Las variables son uno de los conceptos más fundamentales en la programación. Imagina una variable como una "caja" con una etiqueta donde puedes guardar información. Esta información puede cambiar a lo largo del tiempo, por eso las llamamos "variables".

En cualquier aplicación que uses día a día, como Facebook, WhatsApp o Netflix, cada nombre de usuario, cada mensaje, y cada película que ves está guardado temporalmente en la memoria de tu dispositivo gracias a las variables.

Aprender a usar variables correctamente es el primer gran paso para convertirte en un desarrollador de software profesional, ¡y te acompañarán en cada línea de código que escribas en el futuro!

## Conceptos Teóricos
En JavaScript, una variable es un espacio de memoria reservado en tu computadora. Para usar ese espacio de memoria, le asignamos un nombre (su "etiqueta") y un valor (lo que está dentro de la caja).

Existen **tres tipos de datos básicos** que guardamos frecuentemente en variables:
- **String (Cadena de texto):** Texto puro, como "Juan" o "¡Hola Mundo!". Siempre va entre comillas simples `''` o dobles `""`.
- **Number (Número):** Números matemáticos como `25`, `3.14` o `-5`. No llevan comillas.
- **Boolean (Booleano):** Solo puede tomar dos valores: `true` (verdadero) o `false` (falso). Es ideal para respuestas de Sí/No.

Históricamente, JavaScript introdujo el uso de diferentes palabras clave para crear variables. A lo largo del tiempo, esto ha evolucionado:
- `var`: Es la forma antigua y original de crear variables. **¡Hoy en día ya no se usa!**
- `let`: Sirve para declarar variables modernas cuyo valor *sí puede cambiar* con el tiempo.
- `const`: Sirve para declarar variables ("constantes") cuyo valor *nunca va a cambiar* luego de ser definidas.

Es importante que existan `let` y `const` para que tú (y otros desarrolladores que lean tu código) entiendan rápidamente la intención de la información: si va a ser reasignada o no.

## 5 Ejemplos Progresivos

### Ejemplo 1: Variable String Simple
```javascript
// Declaramos la variable 'nombre' usando la palabra const y le asignamos un texto
const nombre = "Carlos";

// Utilizamos console.log para imprimir (mostrar) la variable en pantalla
console.log(nombre); 
```
**Explicación:** Con `const` decimos "Crea una caja que nunca cambiará". Con `nombre` la etiquetamos. Con `="Carlos"` guardamos el texto "Carlos". Por último, `console.log` es una herramienta para desarrolladores que muestra el resultado.
**Salida esperada:** `Carlos`

### Ejemplo 2: Variable Number
```javascript
// Variable Number declarada con let, porque la edad cambiará en el futuro
let edad = 28;

console.log(edad);

// Reasignamos la variable (cambiamos lo que hay dentro de la caja)
edad = 29; 

console.log(edad);
```
**Explicación:** Comenzamos usando `let` para la edad, ya que sabemos que la persona cumplirá años. A la mitad del código, cambiamos su valor por 29. No repito la palabra `let` porque la caja ya estaba creada, solo introduje algo nuevo.
**Salida esperada:**
`28`
`29`

### Ejemplo 3: Variable Boolean
```javascript
const tieneExperiencia = false;
let buscandoTrabajo = true;

console.log(tieneExperiencia);
console.log(buscandoTrabajo);
```
**Explicación:** Un booleano no necesita comillas. Usamos `false` o `true`. Esto es extremadamente útil para "apagar o encender" procesos, o verificar estados (Ej: 'si el usuario ya inició sesión, muéstrale su perfil').
**Salida esperada:** 
`false`
`true`

### Ejemplo 4: Diferencia var vs let
```javascript
// Código Antiguo (Evitar este uso)
var nombreProducto = "Zapatillas";
var nombreProducto = "Pantalón"; // var permite RE-DECLARAR, esto causa confusión y problemas técnicos

// Código Moderno
let precio = 1500;
// let precio = 2000; // ¡Error! JavaScript moderno no te deja crear dos cajas con el mismo nombre
precio = 2000; // Correcto: solo reasignas el valor.
```
**Por qué let es mejor:** `var` te permite usar el mismo nombre de etiqueta dos veces en la misma área, y sobreescribir la primera sin que te des cuenta. `let` es inteligente y te lanzará un error advirtiéndote que esa etiqueta ya existe y debes escoger otra o solo reasignar.

### Ejemplo 5: const vs let
```javascript
const nombreUsuario = "coder123";
// nombreUsuario = "coder456"; // ERROR! const no permite reasignar el valor por seguridad.

let saldo = 100;
saldo = 50; // CORRECTO. let permite cambiar el valor en el futuro.
```
**Cuándo usar qué:** 
Usa `const` por defecto TODO EL TIEMPO. Cuando te des cuenta de que una variable necesita modificarse forzosamente en algún punto del código (por ejemplo, el score / puntaje en un juego, o los intentos restantes de contraseña), vuélvete atrás y cámbiala a `let`.

## ⚠️ Antiguo vs Moderno

### Antiguo: var (Evitar)
```javascript
var miVariable = "vieja forma";
```
- **Problemas:** `var` causa el "Scope (alcance) Global" por accidente. Permite ser declarada cientos de veces pudiendo destruir código silenciosamente (conocido como redeclaración accidental e `hoisting`).
- **Cuándo lo encontrarás:** Cuando leas código anterior al año 2015 o en sistemas (legacy) muy antiguos que aún no se actualizaron. Tarde o temprano tendrás que arreglar código así.

### Moderno: let y const (Usar)
```javascript
const mes = "Octubre";
let diasDelMes = 31;
```
- **Ventajas:** Código más seguro, evita accidentes, deja muy claro la intención de cada variable para los demás miembros de tu equipo.
- **Recomendación:** ¡Usa SIEMPRE `const`, excepto cuando de antemano sepas que el valor va a variar, donde usarás `let`!

## 💼 Aplicación Profesional

### Caso 1: Frontend (Tienda Online)
```javascript
const nombreProducto = "Macbook Pro";
const precio = 1800;
const enStock = true;
let cantidadSeleccionada = 1;
```
**Explicación:** Fíjate como la información del producto de la tienda es constante (no queremos que un cliente cambie el precio) pero la cantidad que el usuario selecciona en su carrito se declara con `let` porque el cliente puede tocar los botones (+ o -) de su carrito de compras y la cantidad cambiará constantemente antes de comprar.

### Caso 2: Backend (Node.js)
```javascript
const stringConexionBD = "mysql://admin:password123@localhost/mibd";
let usuariosConectados = 530;
```
**Explicación:** En el servidor o backend, tu contraseña de base de datos nunca cambiará mientras corre la app en tiempo real (usas `const`), pero la cantidad de usuarios interactuando sube y baja constantemente, usando `let`.

### Frecuencia de Uso
⭐⭐⭐⭐⭐ **Variables** - Las usarás literalmente en CADA línea de código. Son la estructura básica sobre la que construirás cualquier proyecto gigante o minúsculo. 

## ⚠️ Errores Comunes

### Error 1: Usar var en 2024
- **Código incorrecto:** `var puntuacion = 10;`
- **Por qué falla:** No "falla" de error en la pantalla, pero te expone a errores de redeclaración accidentales. Serás mal visto en entrevistas de trabajo demostrando malas prácticas.
- **Corrección:** `let puntuacion = 10;`

### Error 2: Confundir const con "constante matemática"
- **Concepto erróneo:** Creer que `const` solo se usa para cosas de exactitud matemática universal como `const PI = 3.1416;`
- **Explicación correcta:** En JavaScript, tu nombre de pila, tus mascotas o cualquier dato rutinario que **no planeas cambiar temporalmente** a lo largo del código debe llevar `const`, sin importar si parece "relevante o no" matemáticamente hablando.
- **Ejemplo práctico:** `const usuarioRegistrado = "Laura";` 

### Error 3: Redeclaración accidental usando let
- **Código problemático:** 
```javascript
let vidasJugador = 3;
// 100 líneas después en tu archivo...
let vidasJugador = 2; // Arroja error y rompe la web
```
- **Por qué falla:** No puedes tener dos cajas con la misma etiqueta con `let`.
- **Solución:** Quitar la palabra let en la segunda declaración, dejando solo `vidasJugador = 2;` para reasignar su valor en memoria de forma segura.

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico (5-10 minutos)
**Ejercicio: Crear 3 variables de tu perfil**
1. Abre tu editor de código (VS Code o usa la consola de Chrome presionando F12 -> pestaña "Console").
2. Escribe una variable constante (`const`) con tu nombre (String).
3. Escribe una variable que pueda cambiar (`let`) representando tu edad (Number).
4. Escribe una variable (`const`) si sabes JavaScript (Boolean).
5. Usa `console.log()` para mostrar cada una.

**Solución esperada:**
```javascript
const miNombre = "Roberto";
let miEdad = 35;
const sabeProgramar = false;

console.log(miNombre);
console.log(miEdad);
console.log(sabeProgramar);
```

---

### Nivel 2: Intermedio (15-20 minutos)
**Ejercicio: Simulación de Videojuego**
Imagina que estás diseñando el inicio de un juego.
1. Crea variables fijas para: el máximo de vidas de nivel (3), nombre del jugador principal, nombre del primer mundo ("Mundo Hierba").
2. Crea variables que puedan cambiar para: puntos obtenidos, nivel actual, si el jugador está vivo o no y si lleva puesto el escudo de inmunidad.
Muestra todas las variables usando `console.log()` en pantalla. Intenta reasignar los puntos más adelante (como si hubiese conseguido una moneda).

---

### Nivel 3: Avanzado (30+ minutos)
**Desafío: Sistema simple de compras**
Crea variables que describan el producto "Auriculares Inalámbricos": precio original, precio con descuento, disponibilidad y si el usuario tiene cupón. 
¿Se te ocurre un escenario usando `let` y `const` de manera correcta donde reasignes el valor original de "precio con descuento" demostrando lógica de programación limpia? Muéstralo en la consola. 

## ✅ Checklist de Comprensión
- [ ] Puedo definir qué es una variable en mis propias palabras.
- [ ] Entiendo la diferencia y los casos de uso entre `var`, `let` y `const`.
- [ ] Puedo escribir al menos 3 variables básicas de distintos tipos sin ayuda ni ver apuntes.
- [ ] Entiendo por qué mi primer instinto será siempre usar `const`.
- [ ] Completé el ejercicio nivel 1.
- [ ] Completé el ejercicio nivel 2.
- [ ] Completé el desafío nivel 3.

## 📚 Recursos
- [MDN Web Docs: Guía Completa de variables](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables)
- [JavaScript.info: Variables (en inglés o español seleccionable)](https://es.javascript.info/variables)
