# Objetos Nativos (Math, Date, String methods)

**Módulo:** Javascript Frontend - Aula 7
**Dificultad:** Principiante
**Tiempo estimado:** 25 minutos
**Prerequisitos:** Variables (01_variables.md), Funciones (06_funciones.md)

## Introducción
JavaScript viene de fábrica con una caja de herramientas inmensa armada por sus creadores lista para que la uses. A estos se les llama "Objetos Nativos".

Son colecciones de Funciones (llamadas Métodos) y Variables (llamadas Propiedades) globales que puedes usar en cualquier lado sin tener que programarlas tú. Por ejemplo, en vez de crear tú mismo una fórmula complejísima para averiguar la fecha de hoy, hay una herramienta de fábrica que lo hace en una palabra.

Conoceremos los 3 grupos más usados del mundo laboral: `Math`, `Date`, y métodos para `String`.

## 5 Ejemplos Progresivos

### Ejemplo 1: El Objeto Math (Matemáticas)
`Math` te ayuda a hacer cálculos complejos sin que seas un genio de los números.
```javascript
// Redondeos (Los más usados)
let precioPromedio = 10.8;
console.log(Math.round(precioPromedio)); // 11 (Redondea al más cercano)
console.log(Math.floor(precioPromedio)); // 10 (Corta los decimales hacia abajo siempre)
console.log(Math.ceil(precioPromedio));  // 11 (Sube hacia el "techo" siempre)

// Máximos y Mínimos
console.log(Math.max(10, 50, 200, 3)); // 200 (Descubre el más grande)
```

### Ejemplo 2: Generar Número Aleatorio
`Math.random()` genera un número decimal súper largo al azar entre el 0 y el 0.999... pero nunca llega al 1.
```javascript
// Queremos generar un número entero al azar del 1 al 10:
// 1. Math.random() genera algo como 0.5432
// 2. Lo multiplicamos por 10 (llega a 5.432)
// 3. Math.floor le quita el decimal dejándolo en 5. ¡Le sumamos +1 por si salía 0!

let numAlAzar = Math.floor(Math.random() * 10) + 1;
console.log(`Tu número de la suerte es: ${numAlAzar}`);
```

### Ejemplo 3: El Objeto Date (Fechas y Hora)
El objeto `Date` es complejo pero obligatorio. Se "llama a crearse" escribiendo `new Date()`.
```javascript
// new Date() sin nada adentro trae el momento y hora exactos actuales de tu PC.
const fechaDeHoy = new Date();
console.log(fechaDeHoy); // "Tue Mar 31 2026 04:23:25 GMT-0300" (Difícil de leer)

// Métodos adentro de Date para extraer lo que nos sirve:
console.log(fechaDeHoy.getFullYear()); // El año
console.log(fechaDeHoy.getMonth()); // (OJO!! Los meses son como los Arrays, empiezan en 0. Enero es 0, Marzo es 2)
console.log(fechaDeHoy.getDate()); // El día del mes actual
```

### Ejemplo 4: Manipulación de Texto (String Methods)
Los textos (`Strings`) también vienen con poderes nativos secretos.
```javascript
let frase = "¡JavaScript es genial!";

// .length te avisa cuántos caracteres (letras) tiene de largo, ¡como los Arrays!
console.log(frase.length); // 21

// .toUpperCase() y .toLowerCase() normalizan mayúsculas/minúsculas
console.log(frase.toUpperCase()); // "¡JAVASCRIPT ES GENIAL!"

// .includes() busca una palabra. Devuelve true o false.
console.log(frase.includes("genial")); // true
```

### Ejemplo 5: Cortar y Reemplazar Textos
```javascript
let correoSecreto = "superman@gmail.com";

// .slice(inicio, final) -> Corta y te da una porción del texto.
let primerosCaracteres = correoSecreto.slice(0, 5); 
console.log(primerosCaracteres); // "super"

// .replace("palabra_a_sacar", "palabra_nueva")
let correoFake = correoSecreto.replace("gmail", "hotmail");
console.log(correoFake); // "superman@hotmail.com"
```

## ⚠️ Antiguo vs Moderno
Históricamente, manejar Fechas (`Date`) a mano es tan pero tan complejo (calcular bisiestos, zonas horarias, etc) que los desarrolladores modernos JAMÁS usan `new Date()` puro para un sistema real corporativo.
- **La Práctica Moderna:** Para cosas simples (averiguar el año local hoy) se usa nativo. Pero para proyectos que muestren notificaciones estilo "Hace 5 minutos" o "Llega el 15/Marzo" **USAMOS LIBRERÍAS DE TERCEROS**, como `date-fns` o `dayjs`. Te salvan la vida simplificando el sistema caótico y anticuado de fechas del navegador.

## 💼 Aplicación Profesional

### Frontend: UI de Carrito de compras
```javascript
let precioFlotante = 149.998399;
// Quitar decimales rotos en facturación
let precioEnPantalla = Math.floor(precioFlotante); 
```

### Frontend: Normalizar Buscadores (Search Bar)
```javascript
let terminoBuscado = "   auRIculAres  "; // El usuario escribe todo torcido
let enBaseDatos = "auriculares";

// Lo volvemos a minúsculas, y le aplicamos .trim() que limpia espacios en blanco inútiles al inicio y al final
let textoLimpio = terminoBuscado.toLowerCase().trim();

if (textoLimpio === enBaseDatos) {
     console.log("Producto encontrado.");
}
```

## ⚠️ Errores Comunes

### Error 1: Llamar a los métodos de texto sin paréntesis
- **Código incorrecto:** `let limpio = miFrase.toLowerCase;` (Esto solo te devolverá un balbuceo del sistema, no aplicará el proceso).
- **Solución:** Los métodos son Funciones por ende llevan `()` obligatoriamente para ejecutarse: `miFrase.toLowerCase();`

### Error 2: Confundir Mes 1 con Enero
- **El problema:** `miFecha.getMonth()` en Enero da como resultado `0`.
- **Qué hacer:** Nunca olvides sumarle `+ 1` cuando vayas a imprimirlo en pantalla al cliente final!

### Error 3: Creer que los Strings se modifican a si mismos
```javascript
let mascota = "perro";
mascota.toUpperCase();
console.log(mascota); // ¡Imprime "perro" en minúscula! Sigue igual.
```
- **La verdad:** Al igual que en en el `map` de Arrays, las funciones de transformación de texto escupen un nuevo texto, no pisan el viejo por defecto.
- **Solución:** `mascota = mascota.toUpperCase();` (Reasignamos la caja).

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Simulador de Dados.
Escribe un script corto que genere e imprima usando `Math.random` y `Math.floor` un número al azar del 1 al 6 como lo haría un verdadero dado en la vida real.

### Nivel 2: Intermedio
Recuperar Extensión de un Archivo:
- Crea la variable `let nombreArchivo = "miFotoDeAyer.png";`
- Usando el método `.slice()`, ¿cómo extraerías SÓLO la parte ".png" a una variable nueva?
*Pista: Puedes usar números negativos (`-4`) para indicarle a `slice` que corte contando desde el fondo de la palabra en vez de desde el inicio!*

### Nivel 3: Avanzado
Detector de Spam y Normalización.
- Crea variable de texto: `"   GANASTE la loteria!!! COMPRA HOY   "`.
- En una sola línea encadenada, crea una variable que guarde ese texto "encadenándole" (escribiendo el punto de los métodos uno al lado del otro) las siguientes limpiezas: que le saque los espacios de los bordes (`trim()`), que todo se vuelva minúscula (`toLowerCase()`) y luego finalmente realiza un IF gigante que verifique si SÍ o SÍ ese texto limpio `includes("ganaste")` e imprima "ALERTA SPAM".

## ✅ Checklist de Comprensión
- [ ] Practiqué como utilizar `Math.floor` o `Math.round`.
- [ ] Pude recrear exitosamente el generador de números al azar (el dado).
- [ ] Memoricé la "trampa" del mes `0` = Enero.
- [ ] Descubrí las bondades del `.toLowerCase()`, `.replace()` y el `.trim()`.

## 📚 Recursos Adicionales
- [MDN: Referencia Math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JS.Info: Strings](https://es.javascript.info/string)
