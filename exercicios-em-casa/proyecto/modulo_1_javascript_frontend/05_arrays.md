# Arreglos (Arrays) y sus Métodos

**Módulo:** Javascript Frontend - Aula 5
**Dificultad:** Intermedio
**Tiempo estimado:** 40 minutos
**Prerequisitos:** Variables (01_variables.md), Condicionales (03_condicionales.md)

## Introducción
Hasta ahora hemos guardado un solo dato en cada variable (Ej. `let nombre = "Laura"`). Pero, ¿qué pasaría si necesitas guardar los nombres de los 100 alumnos de una clase o los 50 últimos mensajes de WhatsApp? Crear 100 variables (`nombre1`, `nombre2`, `nombre3`...) sería una pesadilla.

Para resolver esto existen los **Arrays** (Arreglos o Listas). Son como "cajas organizadoras con compartimentos". Te permiten guardar una cantidad infinita de datos adentro de una sola variable, y cada dato tiene un número que indica en qué posición está.

## Conceptos Teóricos
Un **Array** se declara usando corchetes `[]` y separando sus elementos con comas `,`.

- **Índice (Index):** En programación, los Arrays *siempre empiezan a contar desde el cero*. El primer elemento es el 0, el segundo es el 1, el tercero es el 2, etc.
- **Longitud (Length):** Es la cantidad total de elementos que tiene tu lista. Te dice "cuántos ítems hay".
- **Métodos de Array:** Son herramientas (funciones integradas) súper poderosas que JavaScript nos regala para buscar, filtrar, modificar o recorrer todos los ítems de nuestra lista en simples pasos.

## 5 Ejemplos Progresivos

### Ejemplo 1: Crear y Leer de un Array Básico
```javascript
// Declaramos un Array de textos (Strings)
const frutas = ["Manzana", "Banana", "Naranja"];

// Para leer la Banana, accedemos con corchetes a la posición 1 (Recuerda: 0, 1, 2)
console.log(frutas[1]); // Imprime: Banana

// Podemos ver cuántas frutas hay en total
console.log(frutas.length); // Imprime: 3
```

### Ejemplo 2: Modificar y Agregar al Array
```javascript
const usuarios = ["Sara", "Juan"];

// Modificamos a Juan (Posición 1) por Pedro
usuarios[1] = "Pedro";

// El método .push() es el más famoso: Agrega un elemento al FINAL de la lista
usuarios.push("Ana");

console.log(usuarios); // ["Sara", "Pedro", "Ana"]
```

### Ejemplo 3: Listas dentro de Listas (Multidimensionales)
```javascript
const grilla = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Si quiero el número 6 (Fila del medio [1], última columna [2])
console.log(grilla[1][2]); // Imprime: 6
```
**Explicación:** Un tablero de ajedrez o una pantalla está compuesta por "Filas y Columnas". Guardas Arrays adentro de otros Arrays.

### Ejemplo 4: Recorriendo Arrays (Método Antiguo vs forEach)
```javascript
const notas = [10, 8, 9, 6];

// ❌ Tradicional (Antiguo y propenso a errores matemáticos)
for (let i = 0; i < notas.length; i++) {
    console.log(`Tu nota es ${notas[i]}`);
}

// ✅ Moderno: Método forEach
notas.forEach(function(nota) {
    console.log(`Tu nota es ${nota}`);
});
```
**Por qué `forEach` es mejor:** Porque nos olvidamos de contar índices. Le decimos a JavaScript "Por Cada elemento de la lista, ejecuta este código" y él se encarga de pasar la variable mágica `nota` automáticamente de uno en uno hasta terminar.

### Ejemplo 5: El tridente dorado de los Arrays (map, filter, find)

Estos 3 métodos revolucionaron JavaScript. No modifican el Array original, sino que **crean uno nuevo** como resultado.

```javascript
const precios = [10, 15, 20, 30, 50];

// 🔹 .map() = Transforma cada elemento en otra cosa y devuelve la nueva lista.
const preciosConImpuesto = precios.map(precio => precio * 1.21);
console.log(preciosConImpuesto); // [12.1, 18.15, 24.2, 36.3, 60.5]

// 🔹 .filter() = Crea un nuevo Array SOLO con los que pasen la prueba (true).
const preciosCaros = precios.filter(precio => precio > 25);
console.log(preciosCaros); // [30, 50]

// 🔹 .find() = Te devuelve SOLO EL PRIMER ELEMENTO que pase la condición y frena.
const busquedaRapida = precios.find(precio => precio > 15);
console.log(busquedaRapida); // 20
```

## ⚠️ Antiguo vs Moderno

### Antiguo: `for` Loops para todo
Antes de 2015 debías hacer bucles inmensos y complejos con "contadores" manuales para sacar cuentas en una lista. Era fácil equivocarse con "un número de más o de menos" (Off-by-one error).

### Moderno: Métodos Declarativos
Hoy usamos `.map()`, `.filter()`, `.reduce()`, `.find()` y `.some()`.
- **Ventajas:** Código más seguro, cortísimo, fácil de leer para los demás, y se alinea con el paradigma de "Programación Funcional" tan usado en bibliotecas como React.

## 💼 Aplicación Profesional

### Frontend: Renderizar listas dinámicas UI
```javascript
const productos = ["Notebook", "Mouse", "Teclado"];

// Así es como React construye el HTML dinámicamente:
const htmlTarjetas = productos.map(producto => `<li>${producto}</li>`);
```

### Backend: Búsqueda y Filtrado de Base de Datos
```javascript
// Imagina esto como una respuesta de BD con todos los usuarios
const alumnosEnBD = [
  { id: 1, edad: 25 },
  { id: 2, edad: 16 },
  { id: 3, edad: 19 }
];

// Filtramos rapidísimo solo a los mayores de edad
const alumnosAceptados = alumnosEnBD.filter(alumno => alumno.edad >= 18);
```
**Frecuencia de Uso:** ⭐⭐⭐⭐⭐ Total, continua y completamente obligatorios. La programación moderna web no es más que "Mandar JSONs (Arrays con datos)" de ida y vuelta.

## ⚠️ Errores Comunes

### Error 1: Empezar a contar desde el 1
- **Falla:** `let num = misNumeros[1]` creyendo erróneamente que sacará el PRIMER elemento.
- **Consecuencia:** Estarás tomando el SEGUNDO elemento del Array. Jamás olvides que comenzamos por el índice `0`.

### Error 2: Intentar usar propiedades raras que no existen
- **Problema:** Poner `lista.size` o `lista.count`. En algunos lenguajes como Python u otros es así, pero en JavaScript la propiedad se llama exclusivamente `.length`.

### Error 3: Creer que `.map()` modifica la lista original
- **Código problemático:**
```javascript
let precios = [1, 2, 3];
precios.map(p => p * 2); // Devuelves los números creados al vacío
console.log(precios); // ¡Siguen valiendo 1, 2 y 3!
```
- **Solución:** Los métodos modernos SIEMPRE necesitan que "atrapes" el nuevo Array resultante en una nueva Variable. `const nuevosPrecios = precios.map(...)`

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Pizzas.
- Crea un Array con los "gustos" que te gustan para una pizza (4 o 5 textos).
- Agrégale 2 gustos extra usando `.push()`.
- Imprime usando `console.log()` solo el tercer elemento (cuidado con los índices).

### Nivel 2: Intermedio
Reporte de Asistencia.
Tienes este Array de días de asisencia de un curso de 10 días: 
`const asistencia = [true, false, true, true, false, true, true, true, true, false]`
Usando el método `.filter()`, obten en una nueva variable SOLO a los días `true`. Al terminar, hazle un `.length` a esa nueva variable para descubrir el total de "días asistidos".

### Nivel 3: Avanzado
Precios de E-commerce.
Tienes los precios de un carrito: `const carrito = [250, 400, 100, 30]`.
1. Necesitas aplicar un recargo de IVA e Ingresos Brutos (1.30 o 30% a cada uno). Úsa el método que **"transFORMA"** toda la lista creando una nueva ("preciosFinales").
2. Luego, usa `reduce()` (Averigua en MDN o la web cómo usar `reduce`) para sumar todos los preciosFinales y generar el TOTAL a pagar.

## ✅ Checklist de Comprensión
- [ ] Entiendo qué es el Índice Base-Cero (empezar desde 0).
- [ ] Comprendo cómo agregar ítems con `.push()` y modificar seleccionando el subíndice.
- [ ] Distingo muy bien para cuándo es mejor `.filter()` (filtrar), cuándo es mejor `.map()` (transformar todo).
- [ ] Solucioné el reto del IVA a los arrays numéricos.

## 📚 Recursos Adicionales
- [MDN Web Docs: Arrays en JavaScript (Detallado)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Video de Conceptos: Array Methods explicados rápido](https://www.youtube.com/watch?v=R8rmfD9Y5-c) (Buscar "Javascript Array Methods map filter reduce")
