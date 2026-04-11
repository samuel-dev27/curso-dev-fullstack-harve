# Eventos

**Módulo:** Javascript Frontend - Aula 10
**Dificultad:** Intermedio/Avanzado
**Tiempo estimado:** 40 minutos
**Prerequisitos:** DOM (09_dom.md), Funciones (Callback) (06_funciones.md)

## Introducción
Hasta ahora tu código se ha ejecutado a la velocidad de la luz apenas se abría la página web. Pero en la vida real, queremos que las cosas pasen **solamente cuando el usuario haga algo** (dar click en 'Comprar', mover el mouse, presionar "Enter" en un buscador).

Ese "algo que pasa" se llama **Evento**. Tu página web "escucha" (como si tuviera orejas) esos eventos y, cuando detecta uno, dispara la función que nosotros le hayamos dejado preparada. Esta es la semilla secreta que convierte una aburrida página en una "Web App Interactiva".

## Conceptos Teóricos
Para manejar eventos, usamos el método maestro moderno: `.addEventListener()` ("Añadir un Escuchador de Eventos").

Esta poderosa herramienta se compone de tres partes:
1. **El Elemento:** El botón o caja atraída desde el DOM a la cual vamos a "pegarle" la oreja.
2. **El Tipo de Evento:** ¿Qué estamos esperando que pase? (`"click"`, `"submit"`, `"keydown"`, `"mouseenter"`, etc).
3. **El Callback (La Función):** ¿Qué código quieres que ejecute JavaScript en el momento exacto en el que ocurra el evento?

## 5 Ejemplos Progresivos

### Ejemplo 1: El click Clásico
**Tu HTML:** `<button id="btn-comprar">Comprar</button>`
```javascript
const boton = document.querySelector("#btn-comprar");

// Sintaxis: elemento . addEventListener("tipo de evento", funcion_a_ejecutar);
boton.addEventListener("click", function() {
    console.log("¡Gracias por tu compra!");
});
```

### Ejemplo 2: Separar la función para mayor limpieza
En vez de escribir la función anónima `function(){}` apretada ahí mismo, solemos escribirla afuera como una Arrow Function y se la "pasamos" a la oreja de escucha.
```javascript
const btnAlerta = document.querySelector("#btn-alerta");

const lanzarAlerta = () => {
    alert("¡Peligro! Batería baja.");
};

// OJO ACÁ: Se pasa `lanzarAlerta` SIN paréntesis (). Si pones los (), se ejecutará sola apenas cargue la web saltándose la espera al click.
btnAlerta.addEventListener("click", lanzarAlerta);
```

### Ejemplo 3: El objeto mágico `event` (o `e`)
Cuando el navegador detecta un evento, de fondo nos tira un regalo invisible: un gigantesco objeto lleno de datos valiosos sobre lo que acaba de suceder (coordenadas del mouse, qué tecla presionó, etc).
```javascript
const inputTexto = document.querySelector("#miInput");

// Ese 'e' (o 'event') lo atrapamos poniendo una 'e' en los parámetros del callback de escucha
inputTexto.addEventListener("keydown", (e) => {
    // Te va sumando en pantalla qué tecla oprimiste exactamente.
    console.log(`Pulsaste la tecla: ${e.key}`);
});
```

### Ejemplo 4: Evento de Formulario (`submit` y `e.preventDefault()`)
Los formularios en HTML antiguo "recargan" la página completa borrando todo al dar Enter o Click en Enviar. Eso en las aplicaciones modernas arruina la experiencia.
**HTML:** `<form id="formularioLogin"><button>Entrar</button></form>`
```javascript
const formId = document.querySelector("#formularioLogin");

formId.addEventListener("submit", (e) => {
    // ¡LA LÍNEA DE ORO!: "preventDefault()" cancela el comportamiento por defecto (que es recargar la web).
    e.preventDefault(); 
    
    console.log("El formulario se procesó en el aire, sin que la página se blanqueara.");
});
```

### Ejemplo 5: Eventos de Interfaz (Mouse y Focus)
```javascript
const cajita = document.querySelector(".cajita-especial");

// Al entrar con la flechita del mouse por encima
cajita.addEventListener("mouseenter", () => {
    cajita.style.backgroundColor = "pink";
});

// Al sacar la flechita del mouse hacia afuera de la caja
cajita.addEventListener("mouseleave", () => {
    cajita.style.backgroundColor = "white"; // Vuelve a su color normal
});
```

## ⚠️ Antiguo vs Moderno

### Antiguo: `onclick=""` en el HTML
```html
<!-- ESTO ES DE LOS 90s, EVÍTALO A TODA COSTA -->
<button onclick="miFuncionJS()">No me uses</button>
```
- **Por qué evitarlo:** Mezcla brutalmente tecnologías distintas (HTML "manchado" con JS). Es imposible de escalar, horrible de leer y un peligro de seguridad.

### Moderno: `.addEventListener()` puro desde el archivo JS (Visto arriba).
Mantiene tu HTML limpio como el agua, y todo el cerebro (Javascript) contenido en su propio archivo maestro de scripts.

## 💼 Aplicación Profesional

### Frontend: Cerrar modal (Popup)
Múltiple elementos (botones, icono X, etc) cerrando una pantalla emergente en común.
```javascript
const btnCerrar = document.querySelector(".icono-cruz");
const cajaModal = document.querySelector("#modal-terminos");

btnCerrar.addEventListener("click", () => {
     // Modifica la clase CSS responsable de mostrarse en pantalla a "ocultar".
     cajaModal.classList.add("oculto"); 
});
```

### Frecuencia de Uso
⭐⭐⭐⭐⭐ No existe Desarrollo Frontend sin Eventos. Tu trabajo básicamente será atrapar Clicks del usuario y renderizar Listas desde las librerías modernas como React/Vue/Angular (las cuáles basan absolutamente todo en los "Eventos" sintéticos por ti).

## ⚠️ Errores Comunes

### Error 1: Poner los paréntesis a la función callback
- **Código fallido:** `boton.addEventListener("click", imprimirFactura() );`
- **Explicación del fallo:** Ese código se ejecutará e imprimirá la factura AL INSTANTE en cuanto vos abres la página web, y además luego jamás funcionará cuando el usuario de verdad lo clickee.
- **Corrección:** Quítale los `()` para decirle al oyente: "Acá tenés el plano de la función. Correlo **recién** cuando alguien haga click". `boton.addEventListener("click", imprimirFactura);`

### Error 2: El evento de Botones Formulario recarga la web
- **El problema:** Tienes un `<form>` con un botón al final con `addEventListener("click")`, pero cuando vas a leer el dato que ingresó, la web hace un destello y todo vuelve a como al principio vacío en medio segundo.
- **Solución:** ¡Recuerda el Ejemplo 4! Tienes que atrapar el evento `"submit"` del `<form>` entero, y poner adentro al principio de todo un jugoso y salvador `e.preventDefault()`.

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Botón Saludador:
- En tu HTML haz un botón que diga "Click aquí". Ponle un ID inventado.
- Cázalo desde JS con el selector de DOM.
- Ponle un AddEventListener que escuche el "click". Al escuchar, haz saltar la alerta nativa del navegador: `alert("¡Bienvenido al sistema!");`

### Nivel 2: Intermedio
Monitor de letras (Keydown).
- Escribe una caja un simple `<input type="text" id="campo-secreto">` en tu HTML.
- Ponle un event listener de tipo `"input"` o `"keydown"`. 
- Imprime usando `console.log` el objeto misterioso atrapándolo como "(evento) => {}". Observa en tu consola de Chrome cómo cada letra oprimida va apareciendo e interactúa contigo.

### Nivel 3: Avanzado
El Contador Minimalista.
- Arma un HTML con un `<p id="numero">0</p>` y dos botones: uno `<button id="btn-sumar">+</button>` y otro para restar.
- En JS, declara una variable global al aire libre, let: `let contador = 0`.
- Crea dos listeners, uno para el botón clickado de Más, que haga la matemática `contador++` (agregue uno a su variable abstracta) y acto seguido, modifique en el DOM con `.textContent` al valor final actualizado de ese Let en el `<p>`.

## ✅ Checklist de Comprensión
- [ ] Ya no cometeré el pecado capital de poner `onclick` ensuciando mis líneas en HTML.
- [ ] Entiendo cómo llamar a `addEventListener("click", funcion)`.
- [ ] No pondré los odiosos `()` a la segunda función asustando a mis compañeros y bugueando app en el onLoad.
- [ ] Conocí al mágico objeto `e` (o `event`) para recuperar teclas precionadas e información del evento.

## 📚 Recursos Adicionales
- [MDN: Introducción a Eventos web](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
- [Video: JavaScript Events Explained in 5 min](https://www.youtube.com/)
