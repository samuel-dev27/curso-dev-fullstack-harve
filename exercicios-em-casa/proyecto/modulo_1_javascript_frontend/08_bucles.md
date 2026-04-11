# Bucles (for, while, for...of, break)

**Módulo:** Javascript Frontend - Aula 8
**Dificultad:** Intermedio
**Tiempo estimado:** 30 minutos
**Prerequisitos:** Arrays (05_arrays.md)

## Introducción
En la programación a veces necesitas repetir la misma tarea decenas, cientos o miles de veces. ¿Te imaginas copiar y pegar una misma línea de código 10,000 veces para enviar un correo masivo? Sería ilegible y la computadora se colapsaría. 
Para resolver la repetición masiva usamos **Bucles** (o *Loops* en inglés).

Un bucle es un fragmento de código que cicla o da vueltas ejecutando una tarea repetidamente hasta que una "Condición de Parada" se cumpla.

## Conceptos Teóricos
En JavaScript, hay varias estructuras de bucles, de las más antiguas a las más modernas:
- **for**: Es el clásico universal. Le indicamos un inicio, una condición de parada, y de a cuántos "pasos" debe avanzar (ej, de 1 en 1).
- **while**: Menos usado, pero súper poderoso. Repite una acción eternamente *mientras* la condición sea verdadera. Cuidado: puede colapsar tu PC si olvidas el freno.
- **for...of**: Una versión moderna bellísima y obligatoria, creada para recorrer listas (Arrays) sin tener que llevar la cuenta manual matemática.
- **break y continue**: "Poderes" manuales que frenan (`break`) o saltan temporalmente (`continue`) una vuelta entera de un bucle a discreción.

## 5 Ejemplos Progresivos

### Ejemplo 1: El clásico `for` Loop
```javascript
// Partes: (1. Inicio variable; 2. Condición Frenado; 3. Incremento por cada final de vuelta)
for (let vuelta = 1; vuelta <= 5; vuelta++) {
    console.log(`Esta es la vuelta número: ${vuelta}`);
}
```
**Explicación:** Empieza valiendo 1. Luego el sistema pregunta "¿1 es menor que 5?". Como sí es, imprime. Al final, ejecuta el `vuelta++` (que le suma un +1) y vuelve a empezar. Ahora vale 2, y así...

### Ejemplo 2: Recorrer un Array a la antigua
```javascript
const asistentes = ["Laura", "Tomás", "Juan"];

// Usamos i (de index) en 0 porque los arrays arrancan en 0. 
// Pararemos antes de llegar al .length (3).
for (let i = 0; i < asistentes.length; i++) {
     console.log(`Hola, invitado ${asistentes[i]}`);
}
```

### Ejemplo 3: El hermoso `for...of` (Moderno)
Hagamos exactamente lo mismo que arriba pero con ES6 (Moderno):
```javascript
const asistentes = ["Laura", "Tomás", "Juan"];

// Lee mentalmente: "Por cada 'persona' DE 'asistentes', haz esto:"
for (const persona of asistentes) {
    console.log(`Hola, invitado ${persona}`);
}
```
**Ventaja:** Mucho más seguro, imposible pasarse de índice.

### Ejemplo 4: El `while` Loop (Mientras...)
```javascript
let vidasRestantes = 3;

// Lee: "Mientras que vidasRestantes sea mayor a 0..."
while (vidasRestantes > 0) {
    console.log(`Aún estás vivo. Vidas: ${vidasRestantes}`);
    
    // Si olvidamos restar esta vida, ¡el juego crashea en un "Loop Infinito"!
    vidasRestantes--; 
}
console.log("Game Over");
```

### Ejemplo 5: Cortar por lo sano (`break` y `continue`)
```javascript
for (let mineros = 1; mineros <= 10; mineros++) {
    
    // Si el minero es el 3, mandalo a descansar y salta esa vuelta del código (no baja abajo)
    if (mineros === 3) {
        continue;
    }
    
    // Si toca el minero 5, descubrieron oro. FRENA todo el bucle permanente!
    if (mineros === 5) {
        console.log("¡ORO ENCONTRADO EN LA VUELTA 5! Paren las máquinas.");
        break; 
    }
    
    console.log(`El minero ${mineros} está picando piedra...`);
}
```

## ⚠️ Antiguo vs Moderno

En la era del 2010 hacia atrás (y en universidades muy cerradas) el `for (let i=0..)` tradicional se daba todo el primer semestre.
- Hoy en día se busca el **Código Limpio**. Escribir bucles `for` matemáticos a mano para una lista es considerado en muchas empresas como práctica propensa a crear *bugs*. 
- **Recomendación:** Siempre usa `for...of` para listas de datos. O si estás usando Array Methods usa `.forEach()` (que es un híbrido entre método y loop). Limita el `while` para cronómetros o videojuegos interactivos.

## 💼 Aplicación Profesional

### Frontend: Carrusel Automático UI
```javascript
let fotoActual = 0;
const totalFotos = 5;

// Pseudo-código imaginando un botón "Next" del teclado:
while (fotoActual < totalFotos) {
    mostrarFotoIzquierda(fotoActual);
    if(usuarioSalioPantalla) break; // Si salen, frenar animación
    fotoActual++;
}
```

### Backend: Retries a una API Caída
```javascript
let intentosDeDeConección = 0;
let conectado = false;

while (intentosDeDeConección < 5 && !conectado) {
    intentosDeDeConección++;
    conectado = intentarLlamarAlServidorRemoto();
}
```

## ⚠️ Errores Comunes

### Error 1: El terrorífico Loop Infinito
- **El problema:** Tu computadora o navegador de la nada se "fuerza el cierre", lanza olor a quemado o gasta CPU al 100%. ¿Razón? Hiciste un Loop eterno que nunca corta y saturó toda la RAM infinita.
- **Solución:** Siempre asegúrate que tu variable de corte vaya incrementando (`++`) o acercándose matemáticamente a la salida de emergencia en cada vuelta.

### Error 2: "Off by one error" (Errar en el inicio o fin del loop for)
- **Falla:** Empezar un Array en `let i = 1` en vez de cero, resultando en que ignoraste siempre el primer elemento del sistema causándole pérdidas económicas a la app. 
- **Solución:** Usa `for...of`. No cometerás nunca más ese error.

### Error 3: Usar `break` en Array Methods
```javascript
let nums = [1, 2, 3];
nums.forEach(n => {
    if (n === 2) break; // ¡SINTAX ERROR! Los forEach no toleran el `break` nativo.
});
```
- **Solución:** Si necesitas recorrer o "romper/salir a mitad" obligatoriamente entonces no uses el método `forEach`, usa el `for...of` nativo completo. 

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico
Has un `for` loop matemático tradicional que imprima en pantalla un conteo del 10 al 1 (una cuenta regresiva de cohete espacial!). Pista: en lugar de sumar para arrancar el paso de vuelta, tienes que restarle.

### Nivel 2: Intermedio
Crea un Array llamado `ciudades` (ej "Roma", "Paris", "Berlin").
Ahora, usando el loop limpio **`for...of`**, muestra un `console.log` de la frase: `"El proximo vuelo sale para: TU_CIUDAD"`.

### Nivel 3: Avanzado
Detector del Tesoro Impostor.
Dado el array de 10 elementos repetidos `const cofres = ["Basura", "Basura", "Basura", "Tesoro", "Basura"]`:
Crea un bucle for clásico que revise cada cofre de izquierda a derecha.
- Dentro, usa un IF: Si lee la palabra `"Tesoro"`, tiene que imprimir "¡Tesoro en la posición X!" y usar OBLIGATORIAMENTE un comando `break` para que el código termine de girar y no abra los sobrantes perdiendo tiempo computacional.

## ✅ Checklist de Comprensión
- [ ] Conozco las partes formales del loop de la vieja escuela `for(let i=0...)`.
- [ ] Entiendo con nitidez la diferencia y los usos del `while` (riesgoso y manual) y el loop pre-armado `for`.
- [ ] He resuelto el uso del elegante `for...of` para evitar indexaciones matemáticas rotas.
- [ ] Comprendo cómo "Frenar" emergencias y evité un Loop infinito en mi PC.

## 📚 Recursos Adicionales
- [MDN: Bucles e iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Video corto: Map vs for...of, ¿cuál usar?](https://youtube.com)
