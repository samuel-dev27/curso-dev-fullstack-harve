# Concatenación y Template Strings

**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 15 minutos
**Prerequisitos:** Variables (01_variables.md)

## Introducción
La concatenación en programación significa "unir" dos o más partes de texto (Strings) o texto y variables juntas. Es extremadamente común ya que frecuentemente necesitamos crear mensajes dinámicos para los usuarios basados en los datos del sistema.

Imagina que quieres mostrar "¡Bienvenido, Laura!". "Laura" es el valor dinámico guardado en la variable de usuario, y "¡Bienvenido, " es el mensaje fijo. Unir esas dos piezas es a lo que llamamos concatenar. Encontrarás esto en prácticamente todas las notificaciones push, emails automatizados y pantallas en la web.

## Conceptos Teóricos
A lo largo de los años en JavaScript han existido dos métodos principales para unir textos:
- **Concatenación Clásica con `+`:** El símbolo de suma no solo suma números; si detecta texto lo une entre sí.
- **Template Strings (Plantillas de Texto):** Introducidas en 2015, usan "backticks" (comillas invertidas `` ` ``) en lugar de las comillas tradicionales simples o dobles. Permiten introducir las variables adentro del texto fácilmente sin usar el signo `+`. 
- **Interpolación:** Es el proceso dentro del Template String de incrustar una variable o código usando la estructura `${nombreVariable}`.

## 5 Ejemplos Progresivos

### Ejemplo 1: Concatenación Básica (Antiguo)
```javascript
const nombre = "Carlos";
// Usamos el símbolo + para unir el texto "Hola " con el valor de la variable
const saludo = "Hola " + nombre;

console.log(saludo);
```
**Explicación:** Date cuenta que debes agregar un espacio en blanco después de "Hola " para que no salga "HolaCarlos" todo junto. Esto causa problemas de legibilidad con textos largos.
**Salida esperada:** `Hola Carlos`

### Ejemplo 2: Template String (Moderno)
```javascript
const nombre = "Carlos";
// Observa el uso de comillas invertidas ` y el bloque ${}
const saludo = `Hola ${nombre}`; 

console.log(saludo);
```
**Explicación:** Este es el método moderno (ES6). Al usar las comillas invertidas (backticks), JavaScript busca si existe `${ ... }` en el texto, y si lo encuentra, lo reemplaza por el valor de la variable internamente ahorrándonos muchos signos `+` y el cálculo de espacios a mano.
**Comparación:** Es mucho más limpio de leer y no sufres con los espacios.

### Ejemplo 3: Múltiples Variables
```javascript
const producto = "Auriculares";
const precio = 50;

// Método antiguo complejo
const promoAntigua = "El producto " + producto + " cuesta $" + precio + " hoy.";

// Método moderno Template String
const promoNueva = `El producto ${producto} cuesta $${precio} hoy.`;

console.log(promoNueva);
```
**Ventajas:** Observa lo sencillo que se vuelve leer `promoNueva` frente al mar de signos `+` y fragmentación de comillas de `promoAntigua`.

### Ejemplo 4: Expresiones dentro de Template Strings
```javascript
let cantidad = 3;
let precio = 20;

// Puedes ejecutar matemática o código dentro de ${}
console.log(`El total de tu compra es $${cantidad * precio}`);
```
**Explicación:** Los bloques `${}` no son exclusivos de variables simples. Todo el código JavaScript válido puede ejecutarse adentro. Aquí realizamos el cálculo de `3 * 20` dentro del saludo y obtenemos 60.

### Ejemplo 5: Template Strings Multilinea
```javascript
const nombre = "Elena";

// Si intentaras hacer esto con "", daría error y rompería el código.
const emailFormatoHTML = `
  <h1>¡Bienvenida!</h1>
  <p>Hola de nuevo, ${nombre}.</p>
  <p>Verifica tu email para continuar.</p>
`;

console.log(emailFormatoHTML);
```
**Explicación:** Antes del año 2015 era imposible crear un texto que ocupara muchas líneas (saltos de línea) sin usar caracteres raros de escape como `\n`. Ahora simplemente damos `ENTER` dentro de los backticks y JavaScript respetará el salto de línea. Ideal para redactar emails o maquetar HTML.

## ⚠️ Antiguo vs Moderno

### Antiguo: Operador + (2010-2015)
```javascript
console.log("Error en módulo " + moduloId + ", línea " + lineaError + ": " + descripcionError);
```
- **Problemas:** Muy poco legible e increíblemente propenso a olvidar espacios o sumar signos "de más" que crashean tu sistema. 
- **Cuándo lo encontrarás:** En todos los repositorios antiguos que debas mantener por clientes. 

### Moderno: Template Strings (2015+)
```javascript
console.log(`Error en módulo ${moduloId}, línea ${lineaError}: ${descripcionError}`);
```
- **Ventajas:** Extremadamente legible, flexible, y acepta líneas múltiples con facilidad.
- **Recomendación:** **SIEMPRE Usa Template Strings con Backticks (``), a menos que sea una unión minúscula y simple.**

## 💼 Aplicación Profesional

### Frontend: Crear HTML dinámico
```javascript
const producto = { nombre: "Zapatillas Nike", precio: 120 };
// Así es domo React o aplicaciones modernas renderizan sus páginas desde las variables a la pantalla
const tarjetaHTML = `
  <div class="tarjeta">
      <h2>${producto.nombre}</h2>
      <button>Comprar por $${producto.precio}</button>
  </div>
`;
```

### Backend: Log messages e Informes
```javascript
const idTransaccion = 992831;
const estado = "Fallida";
console.log(`[ALERTA SISTEMA] - La transacción ${idTransaccion} devolvió estado: ${estado}.`);
```
**Frecuencia de Uso:** ⭐⭐⭐⭐⭐ Lo usarás CONSTANTEMENTE todos los días para armar mensajes, mostrar estado de variables a los usuarios en pantalla o alertas de depuración.

## ⚠️ Errores Comunes

### Error 1: Mezclar quotes incorrectamente
- **Código incorrecto:** `const a = "Hola ${nombre}";`
- **Solución:** ¡Recuerda! Las comillas dobles `""` o simples `''` ignoran el signo `$`. Solo sirven los "backticks" para inyectar variables: ``` `Hola ${nombre}` ```.

### Error 2: Olvidar los backticks
- **Código incorrecto:** `const alerta = Hola ${nombre};`
- **Solución:** Todo texto debe llevar comillas envoltorias de algún tipo.

### Error 3: Olvidar el "$" en la variable a inyectar
- **Código incorrecto:** ```const msj = `Faltan {dias} días`;```
- **Solución:** Las llaves puras no hacen nada mágico. La directiva completa es el signo de dólar e inmediatamente llaves encadenadas: `${}` 

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Escribe tu presentación usando template strings abriendo un `console.log`:
- "Hola, mi nombre es {nombre}, tengo {edad} años y vivo en {ciudad}"
*Sugerencia: Define antes las 3 variables con tus datos y únelas en un template string.*

### Nivel 2: Intermedio
Simula un cajero automático donde un usuario recibe un comprobante de extracción:
Crea un mensaje al usuario final usando backticks. El texto debe llevar internamente estas variables variables:
- Nombre del usuario
- Fecha de hoy (Texto).
- Un cálculo adentro del bloque de inyección (restar un saldo original de $1000 - una extracción de $250).

### Nivel 3: Avanzado
Genera un bloque en diseño "multilinea HTML" puro simulando una factura. En un solo Template String con "Enters" deberás imprimir:
- Nombre del Cliente
- Fecha de la Factura
- Nombre del Producto 
- Precio del Producto y Cantidad.
- En una línea de TOTAL, haz el cálculo de multiplicación inyectado dinámicamente.

## ✅ Checklist de Comprensión
- [ ] Entiendo qué significa la palabra "concatenación".
- [ ] Entiendo por qué usar signos + se vuelve problemático con textas largos.
- [ ] Sé hacer la puntuación invertida ("Backticks" o "Acentos graves") en mi teclado. 
- [ ] Comprendo cómo inyectar variables adentro de dicho texto usando `${}`
- [ ] He resuelto la creación de un bloque multilinea exitosamente.
- [ ] Pude completar satisfactoriamente los 3 ejercicios.

## 📚 Recursos Adicionales
- [MDN Web Docs: Template literals (Plantillas Literales)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
- [Documentación oficial sobre textos String en JS.Info](https://es.javascript.info/string)
