# Operadores Aritméticos y Lógicos

**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 20 minutos
**Prerequisitos:** Variables (01_variables.md), Condicionales (03_condicionales.md)

## Introducción
En la escuela aprendiste a sumar, restar, multiplicar y dividir. La programación hace uso intensivo de estos procesos matemáticos básicos ("Operadores Aritméticos").

Además de las matemáticas, también utilizamos los "Operadores Lógicos" (Y / O). Imagina que quieres ir al cine: "Voy al cine SI tengo dinero **Y** también SI mis amigos van". O bien: "Compro palomitas **O** compro nachos". Esta es la misma lógica con la que las computadoras toman decisiones múltiples juntas.

## Conceptos Teóricos
### Operadores Aritméticos
Se encargan de las matemáticas:
- Suma: `+`
- Resta: `-`
- Multiplicación: `*`
- División: `/`
- Módulo (El "resto" de una división): `%`

### Operadores Lógicos
Se encadenan dentro de nuestras Condiciones `if`:
- **AND (`&&`)**: Significa "Y". Obliga a que **TODAS** las condiciones sean verdaderas para que dé `true`.
- **OR (`||`)**: Significa "O". Con que **SOLO UNA** condición sea verdadera, el total da `true`.
- **NOT (`!`)**: Invierte un valor. Transforma un falso a verdadero y viceversa.

## 5 Ejemplos Progresivos

### Ejemplo 1: Operadores Matemáticos Básicos
```javascript
let vidas = 3;
vidas = vidas - 1; // Pierdes una vida, ahora tienes 2
vidas -= 1; // Exactamente lo mismo de arriba, pero más corto ("Shorthand")

// Lo mismo para sumar
let oro = 0;
oro += 10; // Suma 10 al oro que ya tenías
```
**Explicación:** El concepto "Shorthand" (`+=` y `-=`) nos permite modificar el valor de la variable de forma acortada.

### Ejemplo 2: El misterioso Módulo %
```javascript
// El módulo NO es un porcentaje. Es lo que "sobra" de una división.
let sobrante = 10 % 3;
console.log(sobrante); // Imprime 1
```
**Explicación:** Si tienes 10 porciones de pizza para 3 personas, a cada uno le tocan 3 exactas (3x3=9), y "sobra" 1 porción. El módulo `%` siempre te da ese "1" de respuesta. Es extremadamente útil para saber si un número es par o impar (Ej: `numero % 2 === 0` significa que es par).

### Ejemplo 3: Operador Lógico AND (&&)
```javascript
let tieneEntrada = true;
let tieneEdadMinima = true;

// AMBAS deben ser true
if (tieneEntrada && tieneEdadMinima) {
    console.log("Puedes ingresar al concierto.");
}
```

### Ejemplo 4: Operador Lógico OR (||)
```javascript
let tieneTarjetaCredito = false;
let tienePaypal = true;

// Con SOLO UNA true, el sistema da paso
if (tieneTarjetaCredito || tienePaypal) {
    console.log("Puedes realizar la compra.");
}
```

### Ejemplo 5: Operador NOT (!)
```javascript
let estaSuscripto = false;

// El signo ! invierte la variable. Lee: "Si NO está suscripto"
if (!estaSuscripto) {
    console.log("Por favor, únete a nuestra plataforma.");
}
```
**Explicación:** Colocar el signo de exclamación `!` transforma tu Variable `false` en `true` dejándote entrar a ese bloque IF rápidamente.

## ⚠️ Antiguo vs Moderno
Históricamente, no ha habido muchos cambios "rotos" en los operadores básicos, ¡son el cimiento del lenguaje!
Sin embargo, un error antiguo que persistía era usar las matemáticas junto a Strings por confusión (Ej: `"3" * 2`), lo cual producía matemáticas raras y fallos silenciosos.
**Recomendación Moderna:** No intentes hacer matemáticas con variables de texto, ¡convierte siempre el texto a número primero!

## 💼 Aplicación Profesional

### Frontend: Calcular elementos UI
```javascript
let anchoPantalla = 1200;
let anchoTarjeta = 300;
// Calcular cuántas tarjetas caben enteras usando Math.floor
let tarjetasPorFila = Math.floor(anchoPantalla / anchoTarjeta);
```

### Backend: Validación de seguridad
```javascript
let ipBloqueada = false;
let usuarioAdmin = true;

// Si NO está bloqueada Y eres admin
if (!ipBloqueada && usuarioAdmin) {
    console.log("Descargando base de datos...");
}
```

## ⚠️ Errores Comunes

### Error 1: Confundir % (Módulo) con un Porcentaje
- **Falla:** Querer sacarle el 10% a 1000 usando `1000 % 10`. Eso solo calculará el "sobrante de dividir".
- **Solución:** Calcular el porcentaje multiplicando por el decimal. Ej: `1000 * 0.10`

### Error 2: Escribir un solo `&` en vez de `&&`
- **Por qué falla:** Un solo `&` hace algo llamado "Operación de Bits" a bajo nivel en la computadora, lo cual ignorará tu IF/ELSE y te dará resultados que jamás esperarías. Usa siempre `&&` y `||`.

### Error 3: No usar paréntesis en lógicas muy largas
```javascript
// Malo: ¿Se lee OR primero o AND primero?
if (tieneDinero || cupon && stock > 0) {}

// Bueno: Agrupar la lógica de prioridad
if ((tieneDinero || cupon) && stock > 0) {}
```

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Puntaje de videojuego:
- Declara una variable `score` en 0.
- Súmale 100 puntos usando el atajo `+=`.
- Súmale 50 puntos más.
- Imprime el total.

### Nivel 2: Intermedio
Sistema de Admisión Escolar:
- Crea las variables `notaExamen` y `asistenciaPorcentaje`.
- Escribe un IF usando `&&` para que el alumno solo apruebe SI la `notaExamen` >= 7 Y el `asistenciaPorcentaje` >= 80.
- Imprime el resultado con mensajes acordes.

### Nivel 3: Avanzado
Detector de Mes de Ofertas.
Tienes tres variables booleanas: `esBlackFriday`, `esCyberMonday`, `esFinDeAno`.
- Escribe una lógica de un IF que aplique y avise por pantalla sobre una "Oferta del 50%" SI CUALQUIERA de esos tres eventos es `true`.
- Dentro de las variables de prueba, deja dos en false y una en true. 

## ✅ Checklist de Comprensión
- [ ] Conozco todos los de operadores matemáticos básicos (`+`, `-`, `*`, `/`).
- [ ] Entiendo cómo y para qué sirve el módulo `%`.
- [ ] Entiendo la diferencia conceptual entre OR (`||`) y AND (`&&`).
- [ ] Sé cómo usar de forma práctica el negador `!`.
- [ ] Terminé los tres ejercicios.

## 📚 Recursos Adicionales
- [MDN: Expresiones y Operadores](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
