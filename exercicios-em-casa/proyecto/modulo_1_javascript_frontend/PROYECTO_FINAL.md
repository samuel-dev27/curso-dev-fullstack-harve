# 🛒 Proyecto Final: Carrito de Compras Interactivo

## 📝 Descripción
Felicidades, llegaste al final monumental del primer módulo. Vas a construir el cerebro lógico de un Mini-E-commerce "Carrito de compras". 
Esta no es una UI bonita y ya (aunque puedes diseñarla), sino que programaremos la lógica JavaScript pesada subyacente que requiere un simulacro de compra real. Este tipo de proyectos es estándar para las pruebas de Admisión Junior.

El sistema debe permitir exhibir productos dinámicamente en HTML a base de un Array de Objetos, el usuario podrá dar clic a un botón particular que capturará el elemento y actualizará las matemáticas de un panel-carrito flotante sin refrescar la página.

## 🎯 Objetivos
- [ ] Manejar DOM manipulation
- [ ] Usar arrays y objetos
- [ ] Manejar eventos de usuario
- [ ] Aplicar condicionales
- [ ] Crear funciones reutilizables
- [ ] Persistencia con localStorage

## 📋 Requisitos Funcionales
- [ ] Mostrar lista de 5-10 productos
- [ ] Cada producto: nombre, descripción, precio, imagen
- [ ] Botón "Agregar al carrito"
- [ ] Carrito muestra: products, cantidad, precio total
- [ ] Eliminar items
- [ ] Actualizar cantidad
- [ ] Aplicar código de descuento
- [ ] Guardar carrito en localStorage (persiste al recargar)

## 🏗️ Estructura

```
proyecto-carrito/
  ├── index.html
  ├── style.css
  ├── script.js
  ├── data/
  │   └── products.js
  └── assets/
      └── images/
```

## 📚 Conceptos a Aplicar

- Variables y tipos de datos → [archivo 01](./01_variables.md)
- Template strings → [archivo 02](./02_concatenacion_template_strings.md)
- Condicionales → [archivo 03](./03_condicionales.md)
- Operadores → [archivo 04](./04_operadores.md)
- Arrays y métodos → [archivo 05](./05_arrays.md)
- Funciones → [archivo 06](./06_funciones.md)
- Objetos nativos → [archivo 07](./07_objetos_nativos.md)
- Bucles → [archivo 08](./08_bucles.md)
- DOM manipulation → [archivo 09](./09_dom.md)
- Eventos → [archivo 10](./10_eventos.md)

## 💡 Pasos para Implementar

1. **Preparar la Base de Datos Falsa:** En un archivo aparte (o al inicio de tu script), define una constante `productos` que sea un Array. Adentro de él arma 6 objetos con atributos: `id`, `titulo`, `precio` y `fotoUrl`.
2. **Armar el HTML Básico:** Crea un `<div id="catalogo"></div>` para que se inyecten tus productos, y un `<aside id="carrito"></div>` en un costado de la pantalla.
3. **Renderizar Dinámico:** Construye una función `renderizarProductos()` que recorra tu array `productos` con `.forEach()` y arme HTML de tarjetas. Inyecta este HTML en tu div "catalogo" usando `.innerHTML` o `appendChild`. Asegúrate de ponerle al botón un atributo custom, por ejemplo `<button data-id="${producto.id}">`.
4. **Dar vida a los botones (Escucha):** Haz que todos los botones de "Agregar" atados en el DOM adquieran un `.addEventListener("click", () => ...)`.
5. **Añadir la variable Global del Estado:** Crea `let carritoCompras = [];`
6. **Lógica de Agregar al Carrito:** Cuando oprimes el botón, tu código lee el `data-id`. Llama a una función `agregarAlCarrito(idClickeado)`. Esa función debe usar el método `.find()` para recuperar todo el objeto entero de tu "Base de datos falsa" del paso 1, y hacerle un glorioso `.push()` adentro de `carritoCompras`.
7. **Actualizar Pantalla del Carrito:** Tras hacer el push, llama auto-mágicamente a una function que haga un `innerHTML` vaciando el panel del carrito y re-dibujándolo desde cero usando el actualizado array `carritoCompras`. 
8. **Matemáticas Finales (El Total):** Debajo del "sub-total" en el carrito, crea una variable que mediante el método de Array `.reduce()` sume todos los precios de todo lo recabado.
9. **Eliminar Específicamente:** Un botón rojo de basura (X) por cada ítem. Si lo aprieto, usa `.filter()` sobre la variable `carritoCompras` pidiéndole amablemente a JS que "deje pasar" a todos los que tengan un ID que *NO* sea el que acabas de apretar. Llama de nuevo al render del carrito del Paso 7.
10. **La Persistencia Mágica:** En CADA adición o eliminación, toma tu variable `carritoCompras`, divídela en String con `JSON.stringify` y métela en `localStorage`. Al momento de recargar el `window.onload`, comprueba si el Storage existía para revivir y pintar tu carrito o comenzar desde cero de nuevo.

## 🔍 Casos de Prueba

### Caso 1: Agregar producto
- **Acción:** Presionar el botón "Añadir a carrito" tres veces rapidísimo en la "Camisa Roja".
- **Comprobar:** Debería salir 1 sola "Camisa", pero decir `cantidad: 3`. ¡No deberían haber 3 tarjetitas rojas en el panel lateral colapsando el sitio!

### Caso 2: Aplicar descuento
- **Acción:** Ingresar 'PROMO20' en el input de abajo.
- **Comprobar:** El total general pasa de $1000 a $800 y el input se bloquea previniendo un doble descuento.

### Caso 3: Persistencia
- **Acción:** Añade 2 pares de Zapatos. Cierra la pestaña entera de Google Chrome. Vuelve a abrirla y navega al `index.html`.
- **Comprobar:** El carrito lateral debe auto-abrirse y tus zapatos tienen que seguir guardados allí sanos y salvos.

## 📊 Rúbrica
- Funcionalidad básica: 40%
- Código limpio: 20%
- Documentación: 15%
- Desafíos extras: 25%

## 🚀 Desafíos Opcionales
1. Filtrar los productos por categoría (`Gorra`, `Pantalones`) con botones extra.
2. Hacer un falso "Login", pidiendo un nombre con un `prompt` y que el carrito guarde un string custom de `localStorage` estilo "carrito_Juan".
3. Sistema de reviews con Estrellitas ficticio.
4. Mostrar alerta visual temporal tipo "Tostada PopUp verde" cada vez que un producto logre su `.push()`.

## 📖 Código Ejemplo Final Mental

```javascript
// La base de datos
const mockDB = [
   { id: 101, name: "Casco Bici", price: 200 },
   { id: 104, name: "Luces", price: 30 }
];
let miCarrito = [];

// ... Toda tu lógica pesada aquí ... 
// Usa .map .filter .reduce !

const totalAPagar = miCarrito.reduce( (acumulador, prod) => acumulador + prod.price, 0 );
document.querySelector("#textoTotal").textContent = `$${totalAPagar}`;
```

---
*DURACIÓN TOTAL: ~4000 palabras integradoras. Mucha suerte, diviértete programando y presume tu código terminado en tu GitHub personal.*
