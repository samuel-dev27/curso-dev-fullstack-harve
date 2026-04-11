# Estructuras Condicionales (if/else)

**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 25 minutos
**Prerequisitos:** Variables (01_variables.md), Concatenación (02_concatenacion_template_strings.md)

## Introducción
En la vida real tomamos decisiones todo el tiempo basados en condiciones: "Si llueve, llevo paraguas; si no, llevo lentes de sol". En la programación, a esta toma de decisiones le llamamos **Estructuras Condicionales**.

Sin estas estructuras, todos los programas harían exactamente lo mismo desde el principio hasta el final sin importar quién los use. Gracias a las condicionales, tu videojuego favorito sabe cuándo mostrar la pantalla de "Game Over" (si tus vidas llegaron a 0), y sitios como Netflix saben si deben dejarte ver una película o mostrarte la pantalla para pagar tu suscripción.

## Conceptos Teóricos
Las estructuras condicionales se basan en la **Lógica Booleana**. Esto significa que JavaScript evaluará una pregunta (condición) y decidirá si la respuesta es `true` (verdadera) o `false` (falsa).

Las palabras clave principales son:
- `if` (si ocurre esto...): Es el bloque donde estableces la primera condición.
- `else if` (sino, si ocurre esto...): Te permite encadenar una segunda, tercera, o infinitas condiciones alternativas.
- `else` (en caso contrario...): Es el bloque que se ejecuta por defecto si absolutamente ninguna de las condiciones anteriores fue verdadera.

Para "preguntar" a JavaScript, usamos **Operadores de Comparación**:
- Mayor que `>` o Menor que `<`
- Mayor o igual `>=` o Menor o igual `<=`
- Igualdad: `==` (Igualdad débil - poco recomendada) y `===` (Igualdad estricta - la más usada).
- Desigualdad: `!=` y `!==`

## 5 Ejemplos Progresivos

### Ejemplo 1: if Básico
```javascript
let edad = 20;

// La condición va entre paréntesis ()
if (edad >= 18) {
    // Si la condición es verdadera (true), ejecuta lo que está en estas llaves {}
    console.log("Eres mayor de edad, puedes entrar al club.");
}
```
**Explicación:** JavaScript pregunta "¿Es 20 mayor o igual a 18?". Como es `true`, entra a las llaves e imprime el mensaje. Si la edad fuera 15, simplemente saltaría las llaves y no haría nada.

### Ejemplo 2: if / else (Dos Caminos)
```javascript
let bateriaCelular = 10;

if (bateriaCelular > 20) {
    console.log("Tu batería está bien.");
} else {
    // El "else" atrapa cualquier otro caso que no cumplió la condición de arriba
    console.log("Por favor, conecta tu cargador pronto.");
}
```
**Explicación:** Tienes un camino "feliz" (batería alta) y un camino alternativo por defecto (batería baja). Como 10 no es mayor a 20, se dirige derecho al bloque `else`.

### Ejemplo 3: if / else if / else (Múltiples Caminos)
```javascript
let hora = 14;

if (hora < 12) {
    console.log("Buenos días");
} else if (hora < 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
```
**Explicación:** Puedes crear "rutas" lógicas encadenadas. JavaScript irá probando de arriba hacia abajo. En el momento que una dé positivo (`true`), ejecuta ese bloque y descarta todas las demás que estén abajo.

### Ejemplo 4: Operador de Comparación Correcto (=== vs ==)
```javascript
let numeroEscrito = "5"; // Esto es una STRING (Texto)

// ❌ EVITA ESTO (Doble igual)
if (numeroEscrito == 5) {
    console.log("Usando doble igual, JS dice que es verdadero aunque uno sea texto");
}

// ✅ USA SIEMPRE ESTO (Triple igual - Igualdad estricta)
if (numeroEscrito === 5) {
    console.log("Son exactamente iguales");
} else {
    console.log("Usando triple igual, no entra, porque el texto '5' no es el número 5");
}
```
**Por qué `===` es mejor:** El doble igual hace una "coerción", es decir, trata de transformar a escondidas tú código para ver si se parecen, lo que causa bugs catastróficos. El triple igual es estricto: revisa que sean exactamente el mismo texto/número Y el mismo tipo de dato.

### Ejemplo 5: Operador Ternario (Alternativa compacta a if/else)
```javascript
let notaExamen = 8;

// Forma clásica con if/else
if (notaExamen >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

// Forma moderna y compacta con Operador Ternario
// Sintaxis: (condicion) ? lo_que_pasa_si_es_verdad : lo_que_pasa_si_es_falso;
let resultado = (notaExamen >= 7) ? "Aprobado (Ternario)" : "Reprobado (Ternario)";
console.log(resultado);
```
**Cuándo usarlos:** El operador ternario es hermosísimo para ahorrar espacio cuando solo tienes DOS posibles resultados súper simples y cortos (ej. mostrar text A o texto B).

## ⚠️ Antiguo vs Moderno

En la vieja escuela, era muy común ver `==` (doble igual) por todos lados. Además de gigantescas montañas de bloques `if/else` anidados (uno dentro de otro, formando una pirámide horizontal conocida como "Callback Hell" o "Pyramid of Doom").

**Prácticas Modernas:**
1. Siempre usamos `===` y `!==` (desigualdad estricta).
2. Para resolver condiciones de una sola línea (Ej. "Guardar en la BD el valor 'Activo' o 'Inactivo'"), usamos el **Operador Ternario**.
3. **Early Return:** En el desarrollo profesional tratamos de no "anidar" ifs (meter ifs dentro de otros ifs), sino que comprobamos los fallos al principio de todo y cancelamos rápido.

## 💼 Aplicación Profesional

### Frontend: Validación de formulario
```javascript
let emailIngresado = "usuario@gmail.com";
let passwordIngresado = "12345";

if (emailIngresado === "") {
    console.log("Error: Debes proveer un email.");
} else if (passwordIngresado.length < 8) {
    console.log("Error: Tu contraseña debe tener más de 8 caracteres.");
} else {
    console.log("Formulario enviado exitosamente.");
}
```

### Backend: Autorización
```javascript
let rolUsuario = "admin";

if (rolUsuario === "admin") {
    // Permiso otorgado para borrar la base de datos
    console.log("Accediendo al Panel de Control. ¡Bienvenido Jefe!");
} else {
    // Rechazo de acceso
    console.log("Acceso denegado. Se requiere nivel de Administrador.");
}
```

### E-commerce: Cálculo de descuento
```javascript
let totalCompra = 150;
let totalFinal;

if (totalCompra >= 100) {
    totalFinal = totalCompra * 0.90; // 10% de descuento
    console.log(`¡Felicidades! Tienes descuento. Pagas $${totalFinal}`);
} else {
    totalFinal = totalCompra;
    console.log(`El monto total es $${totalFinal}`);
}
```
**Frecuencia de Uso:** ⭐⭐⭐⭐⭐ Lo usarás CONSTANTEMENTE todos los días. ¡Ninguna app sobrevive sin evaluar condiciones!

## ⚠️ Errores Comunes

### Error 1: Usar `=` en lugar de `===` en mis condiciones
- **Código incorrecto:**
```javascript
let vidas = 3;
if (vidas = 0) {  // ❌ FATAL ERROR. Estás ASIGNANDO cero, no preguntando.
    console.log("Game Over");
}
```
- **Solución:** ¡Recuerda! `==` o `===` son para preguntar. Un solo `=` es para reasignar dentro de una caja.

### Error 2: Confundir `==` con `===`
- **Problema:** En el mercado laboral moderno si envías una prueba técnica con `==` te van a rechazar la entrevista. Se considera código legado, con altas probabilidades de presentar fallas.
- **Solución:** Memoriza poner tres símbolos iguales en vez de dos al comparar.

### Error 3: El if anidado complejo
- **Problema:** Meter un if, adentro de otro if, adentro de otro if. Terminará volviéndose incomprensible a las semanas.
- **Solución:** Separa la lógica, utiliza `else if` o usa la técnica de "Early Return" devolviendo los errores arriba.

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Crea un programa que evalúe permisos en un país ficticio.
- Crea una variable edad.
- Si la edad otorga el permiso (>= 18), imprime en un `console.log("Puedes votar este año")`.
- Si tiene menos, imprime que aún no puede.

### Nivel 2: Intermedio
Haz un sistema de descuentos para una panadería. Escribe la lógica usando múltiples sentencias `if / else if`:
- Crea una variable `compraTotalUSD`.
- Si la compra abarca más de $500: aplica 20% descuento y muéstralo.
- Si la compra supera los $300: aplica 10% de descuento.
- Si supera los $100: aplica 5% de descuento.
- Si es menor a eso, se cobra sin descuento.
*Calcula y muestra el precio final con un Template String.*

### Nivel 3: Avanzado
Vamos a crear el Validador de Contraseñas Bancarias:
- Declara una variable `password` igual a una contraseña de tu gusto (ej "superClave").
- Verifica lo siguiente paso a paso:
  - ¿Tiene mínimo 8 caracteres de largo? (Pista: usa `password.length >= 8`)
  - ¿Contiene la palabra prohibida "123"? 
  - Usando `if`, `else if`, da mensajes de validaciones de qué fue lo que falló así el cliente sabe cómo arreglarla.

## ✅ Checklist de Comprensión
- [ ] Entiendo qué es y por qué se usan las estructuras condicionales (el `if` y el `else`).
- [ ] Entiendo cuándo y por qué se necesita `else if`.
- [ ] Sé firmemente por qué y cuándo debo usar `===` sobre el antiguo `==`.
- [ ] Aprendí sobre el operador Ternario para decisiones minúsculas en una sola línea.
- [ ] Fui capaz de completar los 3 ejercicios demostrando dominio de sintaxis.

## 📚 Recursos Adicionales
- [MDN Web Docs: Tomando Decisiones con tu Código (Condicionales)](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
- [JavaScript.info: Declaración 'if' y el operador condicional '?'](https://es.javascript.info/ifelse)
