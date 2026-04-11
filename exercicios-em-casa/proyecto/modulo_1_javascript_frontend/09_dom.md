# Manipulación del DOM

**Módulo:** Javascript Frontend - Aula 9
**Dificultad:** Intermedio
**Tiempo estimado:** 40 minutos
**Prerequisitos:** Todo lo anterior

## Introducción
Hasta ahora hemos interactuado con la programación usando la consola fidedigna de nuestro navegador (`console.log`). Pero los usuarios normales de internet nunca abren esa consola oscura y llena de código. Ellos ven "Pantallas" (Cajas, botones, imágenes y textos coloridos).
¿Cómo hacemos para que nuestro JavaScript por detrás de escena cambie de color una caja de HTML en vivo frente a los ojos del usuario?
Presentamos al **DOM** (Document Object Model).

El DOM no es más que una "copia estructurada" en la memoria de tu archivo HTML. JavaScript puede agarrar esta copia, buscar cualquier etiqueta que exista y decirle "Cambia tu texto", "Desaparece", "Aparece" o "Cámbiate de color rojo".

## Conceptos Teóricos
Para manipular la pantalla, seguimos 2 pasos universales:
1. **Seleccionar:** Buscar el elemento que queremos cambiar (con métodos como `getElementById` o `querySelector`).
2. **Modificar:** Una vez atrapado en una Variable, cambiar sus "Propiedades" incorporadas (como su texto, su estilo o sus clases).

**Propiedades de Modificación Más comunes:**
- `textContent` y `innerText`: Modifican el texto puro que va por dentro de la etiqueta.
- `innerHTML`: Más peligroso, inyecta y renderiza etiquetas de HTML puro en la pantalla dinámicamente.
- `style`: Permite inyectarle un estilo de CSS en una línea.
- `classList`: Te permite prender (`add`) o apagar (`remove`) una clase de CSS entera en un instante.

## 5 Ejemplos Progresivos

*(Nota: Para todos estos ejemplos, asume que tu JavaScript está enlazado a un archivo `.html` pre-armado).*

### Ejemplo 1: El cláscio `getElementById`
**Tu HTML:** `<h1 id="titulo-principal">Bienvenidos</h1>`
```javascript
// 1. Atrápalo. Document es tu archivo HTML completo.
const titulo = document.getElementById("titulo-principal");

// 2. Modifícalo en vivo (El usuario verá cómo cambia frente a sus ojos)
titulo.textContent = "¡Ofertas de Locura!";
```

### Ejemplo 2: El moderno `querySelector`
Se usa igual que el método moderno de CSS. Si quieres una id usas `#`; si quieres una clase usas `.`.
**Tu HTML:** `<p class="alerta">Todo mal.</p>`
```javascript
// Atrapamos gracias al querySelector moderno usando punto de clase
const mensaje = document.querySelector(".alerta"); 

// Le inyectamos estilo en línea (color: red)
mensaje.style.color = "red";
```

### Ejemplo 3: Modificar Clases en masa (classList)
**Tu HTML:** `<div class="caja-oscura" id="pantalla">...</div>`
**Tu CSS:** `.caja-brillante { background: white; }`
```javascript
const pantalla = document.querySelector("#pantalla");

// Le agregamos la clase "caja-brillante" y ahora será blanca de inmediato
pantalla.classList.add("caja-brillante");

// O la quitamos (reviertiendo el estilo)
pantalla.classList.remove("caja-brillante");
```

### Ejemplo 4: Inyectando HTML Peligroso (`innerHTML`)
**Tu HTML:** `<div id="cajaVacia"></div>`
```javascript
const contenedor = document.getElementById("cajaVacia");

// Aquí metemos una etiqueta negrita de la nada (cuidado, el navegador la procesa tal cual)
contenedor.innerHTML = "<strong>Felicidades, ganaste!</strong>"; 
```
*Por qué peligroso:* Si permites que inyecte un texto escrito por un usuario externo (como un comentario), un hacker podría mandar `<script>` malicioso robando información. Úsalo con respeto.

### Ejemplo 5: Creando elementos desde cero al vacío (`createElement`)
```javascript
// 1. Crear a la nada misma una etiqueta <li> vacía 
const nuevoItem = document.createElement("li");

// 2. Llenarla de contenido o texto
nuevoItem.textContent = "Añadido dinámicamente";

// 3. Tomar de la mano a mi caja principal de mi HTML
const listaEnElHtml = document.getElementById("miListaId");

// 4. Conectarlos. Pegar el LI al final de la Caja.
listaEnElHtml.appendChild(nuevoItem); 
```

## ⚠️ Antiguo vs Moderno

Antes se usaban selectores pesados y confusos basados en una antíquisma idea (las colecciones vivas o *HTMLCollections*): `getElementsByClassName("")` o `getElementsByTagName()`.
Hoy el rey absoluto que nos vino a salvar es **`querySelector()`** para un elemento único, y **`querySelectorAll()`** para agarrar grupos de elementos usando la cómoda y conocida sintaxis que ya aprendiste en CSS (`.clases #ids`). 

## 💼 Aplicación Profesional

### Frontend: Modo Oscuro (Dark Mode) Toggle
```javascript
const bodyElement = document.querySelector("body");

// "toggle" busca si la clase existe. Si existe se la saca, si no existe se la pone.
// Este mini-código alimenta la funcionalidad de Dark Mode del 50% de las webs del mundo.
function cambiarModoOscuro() {
    bodyElement.classList.toggle("modo-oscuro-css");
}
```

## ⚠️ Errores Comunes

### Error 1: Olvidar el `#` o el `.` en `querySelector`
- **Código incorrecto:** `document.querySelector("miId")` u olvidaste punto al inicio en `document.querySelector("miClase")`.
- **Qué pasará:** Te devolverá `null` (nada). Recuerda que es igual a CSS.

### Error 2: Tu JS está cargando antes que tu HTML
- **El problema:** Tu H1 está en la línea 50 tu HTML, pero pusiste tu `<script>` allá arriba en el `<head>`. Cuando JS busca, choca de cabeza contra `null` porque ¡el H1 aún no había nacido (no se había renderizado)!
- **La solución rápida:** Siempre coloca tu etiqueta `<script src="..."></script>` abajo de todo justo antes de cerrar el tag `</body>`. O agrégale el famoso atributo `<script defer>`.

## 🏋️ 3 Ejercicios Progresivos

*Para estos ejercicios, necesitarás vincular un `index.html` básico con un `script.js`.*

### Nivel 1: Básico
- Crea un `<h1>` que diga "Adiós" con la clase `.titulo-triste`.
- En JS, atrápa ese H1 usando `querySelector`.
- Reemplaza su `.textContent` a "¡Hola Mundo!".

### Nivel 2: Intermedio
- Crea un texto `<p id="secreto">Oculto</p>`.
- Crea en tu CSS la clase `.ocultar { display: none; }`
- Trata de ocultarlo dinámicamente usando JS con el poder del `classList.add()`.

### Nivel 3: Avanzado
Vamos a crear 3 tarjetas de colores sin tocar el HTML interno de un div:
- Tienes HTML vacío: `<div id="galeria"></div>`.
- En JS, crea un Array que contenga los colores `["red", "green", "blue"]`.
- Con un un Bucle de los Modernos (`forEach` o `for...of`), recorre cada color y crea (`createElement`) en cada vuelta en el aire un flamante `<p>` con texto "Caja", píntale el fondo usando `.style.backgroundColor` del color actual, y "métele" y enlazalo al div `galeria` usando `appendChild`.

## ✅ Checklist de Comprensión
- [ ] Entiendo y memoricé el concepto mental de ¿Qué es atrapar el DOM?.
- [ ] Conozco las variantes `getElementById` y al maravilloso `querySelector`.
- [ ] Practiqué como intervenir las Clases de CSS en vivo con JS y las listas `classList`.

## 📚 Recursos Adicionales
- [MDN: Manipulando el DOM (Excelente Tutorial)](https://developer.mozilla.org/es/docs/Web/JavaScript/Client-side_web_APIs/Manipulating_documents)
