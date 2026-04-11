# 📋 PROMPTS PRE-HECHOS (Copia y Pega Directamente)

> Aquí están los prompts específicos para cada archivo. Solo copia, pega en tu IA y listo.

---

## 🚀 MÓDULO 1: JAVASCRIPT FRONTEND

### 1️⃣ Para generar: 01_variables.md

Copia TODO esto:

```
Actúa como un Senior Developer Fullstack y Mentor Educativo.

Generar archivo: 01_variables.md para módulo JavaScript Frontend

CONTEXTO:
- Aula 1: Conceptos Básicos
- Nivel: Principiante (primer archivo del módulo)
- Estudiante nunca ha programado
- Duración esperada: 20 minutos lectura + 30 min ejercicios
- Prerequisites: NINGUNO

SIGUE EXACTAMENTE ESTA ESTRUCTURA:

## Encabezado
# Variables en JavaScript
**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 20 minutos
**Prerequisitos:** Ninguno

## Introducción (2-3 párrafos simples)
- Qué es variable
- Por qué importa
- Dónde se usa en apps reales

## Conceptos Teóricos
- Definición de variable (espacio en memoria)
- Tipos de datos: string, number, boolean
- Las tres formas: var, let, const
- Por qué existen 3 palabras clave

## 5 Ejemplos Progresivos

### Ejemplo 1: Variable String Simple
- Código funcionando
- Explicación línea por línea
- Salida esperada
- Diagrama simple

### Ejemplo 2: Variable Number
- Código
- Explicación
- Salida
- Comparación con string

### Ejemplo 3: Variable Boolean
- Código
- Explicación
- Salida
- Caso de uso

### Ejemplo 4: Diferencia var vs let
- Código antiguo (var)
- Problemas de var
- Código moderno (let)
- Por qué let es mejor

### Ejemplo 5: const vs let
- Cuándo usar const
- Cuándo usar let
- Errores comunes
- Buenas prácticas

## ⚠️ Antiguo vs Moderno

### Antiguo: var (Evitar)
- Código con var
- Problemas: redeclaración, hoisting, scope global
- Cuándo encontrarás: Código legacy anterior a 2015

### Moderno: let y const (Usar)
- Código con let
- Código con const
- Ventajas de ambas
- Recomendación: usa const por defecto, let cuando necesites reasignar

## 💼 Aplicación Profesional

### Caso 1: Frontend (Tienda Online)
- Código real: Variables para nombre de usuario, precio, cantidad de items
- Explicación de cada variable
- Por qué se usa aquí

### Caso 2: Backend (Node.js)
- Código real: Variables para datos de usuario, conexión a BD
- Explicación
- Diferencias de uso con frontend

### Frecuencia de Uso
⭐⭐⭐⭐⭐ Variables - Los usarás literalmente en CADA línea de código

## ⚠️ Errores Comunes (3 mínimo)

### Error 1: Usar var en 2024
- Código incorrecto
- Por qué falla
- Corrección

### Error 2: Confundir const con "constante matemática"
- Concepto erróneo
- Explicación correcta
- Ejemplo práctico

### Error 3: Redeclaración accidental
- Código problemático
- Por qué causa problemas
- Solución

## 🏋️ 3 Ejercicios Progresivos

### Nivel 1: Básico (5-10 minutos)
Ejercicio: Crear 3 variables
- Requisitos:
  - 1 variable con tu nombre (string)
  - 1 variable con tu edad (number)
  - 1 variable si trabajas o no (boolean)
- Mostrar en console.log
- Solución esperada

---

### Nivel 2: Intermedio (15-20 minutos)
Ejercicio: Sistema simple de usuario
- Crear objeto con variables (nombre, email, edad)
- Mostrar en console
- Sugerencia: usa const para el objeto, let para variables que cambien

---

### Nivel 3: Avanzado (30+ minutos)
Desafío: Validador simple
- Crear variables para datos de usuario
- Validar que edad sea number
- Validar que email contiene @
- Mostrar mensajes de error si no validan

## ✅ Checklist de Comprensión
- [ ] Puedo definir qué es una variable en mis propias palabras
- [ ] Entiendo la diferencia entre var, let y const
- [ ] Puedo escribir 3 variables básicas sin ayuda
- [ ] Entiendo cuándo usar const vs let
- [ ] Completé el ejercicio nivel 1
- [ ] Completé el ejercicio nivel 2
- [ ] Completé el desafío nivel 3

## 📚 Recursos
- MDN Web Docs: Variables
- JavaScript.info: Variables
- Video: Variables en 5 minutos

---

IMPORTANTE:
- Lenguaje simple, sin jerga innecesaria
- Muchos ejemplos visuales
- Amigable pero profesional
- ~2000-2500 palabras
- Código JavaScript 2024 (ES2023+)
```

---

### 2️⃣ Para generar: 02_concatenacion_template_strings.md

```
Actúa como Senior Developer Fullstack y Mentor.

Generar: 02_concatenacion_template_strings.md

CONTEXTO:
- Aula 1: Conceptos Básicos
- Nivel: Principiante
- Prerequisitos: Haber completado 01_variables.md
- Duración: 15 minutos lectura + 20 min ejercicios

ESTRUCTURA:

# Concatenación y Template Strings

**Módulo:** Javascript Frontend - Aula 1
**Dificultad:** Principiante
**Tiempo estimado:** 15 minutos
**Prerequisitos:** Variables (01_variables.md)

## Intro
- Qué es concatenación
- Por qué lo necesitas
- Dónde lo usas

## Conceptos
- Concatenación con +
- Template strings con backticks
- Interpolación con ${}

## 5 Ejemplos

### Ex 1: Concatenación Básica (antiguo)
- Código
- Explicación
- Salida

### Ex 2: Template String (moderno)
- Código
- Explicación
- Comparación con antiguo

### Ex 3: Múltiples Variables
- Concatenación compleja
- Template string
- Ventajas de template string

### Ex 4: Expresiones dentro de Template Strings
- Código con operaciones
- Cálculos dentro de ${}
- Explicación

### Ex 5: Template Strings Multilinea
- Código HTML/texto multilínea
- Con antiguo era imposible
- Con moderno es simple

## Antiguo vs Moderno

### ⚠️ Antiguo: Operador + (2010-2015)
- Código
- Problemas: Poco legible, propenso a errores
- Encuentra en legacy code

### ✅ Moderno: Template Strings (2015+)
- Código
- Ventajas: Legible, flexible, seguro
- Recomendación: SIEMPRE usa esto

## Casos Profesionales

### Frontend: Crear HTML dinámico
- Ejemplo real de tienda mostrando producto con precio

### Backend: Log messages
- Ejemplo de mensajes de error formatados

Frecuencia: ⭐⭐⭐⭐⭐ Lo usarás constantemente

## Errores Comunes

### Error 1: Mezclar quotes incorrectamente
- Código incorrecto
- Solución

### Error 2: Olvidar backticks
- Código incorrecto
- Solución

### Error 3: Olvidar $ en template strings
- Código incorrecto
- Solución

## 3 Ejercicios

### Nivel 1: Básico
Escribe tu presentación usando template strings:
"Hola, mi nombre es {nombre}, tengo {edad} años y vivo en {ciudad}"

### Nivel 2: Intermedio
Crea un mensaje de error con:
- Nombre del usuario
- Hora actual
- Descripción del error
Usa template string

### Nivel 3: Avanzado
Genera un HTML completo (simulando tienda) con:
- Nombre de producto
- Descripción
- Preço
- Cantidad
Todo en un template string

## Checklist
- [ ] Entiendo qué es concatenación
- [ ] Sé la diferencia entre + y template strings
- [ ] Puedo usar $({}) correctamente
- [ ] Completo ejercicios 1, 2, 3

## Recursos
- MDN Template Literals
- Documentación oficial JavaScript
```

---

### 3️⃣ Para generar: 03_condicionales.md

```
Actúa como Senior Developer Fullstack y Mentor.

Generar: 03_condicionales.md

CONTEXTO:
- Aula 1: Conceptos Básicos
- Nivel: Principiante
- Prerequisitos: Variables y concatenación
- Duración: 25 min lectura + 30 min ejercicios

# Estructuras Condicionales (if/else)

**Módulo:** Javascript Frontend
**Dificultad:** Principiante
**Tiempo estimado:** 25 minutos
**Prerequisitos:** Variables, concatenación

## Introducción
- Qué son condicionales
- Por qué son fundamentales en programación
- Casos reales (edad para votar, descuentos, validaciones)

## Conceptos Teóricos
- Lógica booleana: true/false
- if, else if, else
- Operadores de comparación: ==, ===, <, >, <=, >=, !=, !==
- Por qué === es mejor que ==

## 5+ Ejemplos

### Ex 1: if Básico
- Código simple
- Explicación
- Salida

### Ex 2: if/else
- Dos caminos
- Explicación

### Ex 3: if/else if/else
- Múltiples condiciones
- Explicación

### Ex 4: Operador de Comparación Correcto (=== vs ==)
- Código incorrecto con ==
- Problemas
- Código correcto con ===
- Por qué === es mejor

### Ex 5: Operador Ternario (alternativa compacta)
- Sintaxis: condición ? valor_si_verdadero : valor_si_falso
- Cuándo usar ternario vs if/else
- Ejemplos

## Antiguo vs Moderno
- Ambos usan if/else
- Mejora: Usar === sobre ==
- Mejora: Usar ternario para condiciones simples
- Mejora: Usar early return para evitar anidamiento

## Casos Profesionales

### Frontend: Validación de formulario
- Código real: Verificar que email sea válido

### Backend: Autorización
- Código real: Verificar si usuario tiene permiso

### E-commerce: Cálculo de descuento
- Código real: Si compra > 100 aplica descuento

Frecuencia: ⭐⭐⭐⭐⭐ Constantemente

## Errores Comunes

### Error 1: Usar = en lugar de ==
- Incorrecto código
- Solución

### Error 2: Confundir == con ===
- Ejemplo de problema
- Solución: usa siempre ===

### Error 3: if anidado complejo
- Código difícil de leer
- Refactorización

## 3 Ejercicios

### Nivel 1: Básico
Crea un programa que verifique:
- Si una edad permite votar (>= 18)
- Muestra mensaje apropiado

### Nivel 2: Intermedio
Sistema de descuentos:
- Si compra > 500: 20% descuento
- Si compra > 300: 10% descuento
- Si compra > 100: 5% descuento
- Sino: sin descuento
Calcula y muestra precio final

### Nivel 3: Avanzado
Validador de contraseña:
- Mínimo 8 caracteres
- Debe tener números
- Debe tener mayúsculas
Muestra qué cumple y qué no

## Checklist
- [ ] Entiendo if/else
- [ ] Sé cuándo usar === sobre ==
- [ ] Sé usar operador ternario
- [ ] Completé los 3 ejercicios

## Recursos
- MDN Condicionales
- JavaScript.info Control Flow
```

---

## ⏭️ MÓDULO 1: Archivos Restantes

Para los otros archivos (04, 05, 06, 07, 08, 09, 10), sigue el patrón anterior:

### 🔄 Patrón General para CADA archivo:

```
Actúa como Senior Developer Fullstack y Mentor.

Generar: {NOMBRE_ARCHIVO}

CONTEXTO:
- Aula: {AÚ}
- Nivel: {NIVEL}
- Prerequisitos: {ANTERIORES}
- Duración: {X} minutos

# {TITULO}

**Módulo:** Javascript Frontend
**Dificultad:** {NIVEL}
**Tiempo estimado:** {DURACION}
**Prerequisitos:** [Links a anteriores]

[Sigue estructura completa de PROMPT_MENTOR_SENIOR.md]

## Encabezado + Intro + Conceptos + 5 Ejemplos + Antiguo vs Moderno + Casos Reales + Errores + 3 Ejercicios + Checklist + Recursos
```

### 📝 Lista de Archivos Faltantes Módulo 1:

```
04_operadores.md → Operadores aritméticos, lógicos, comparación
05_arrays.md → Arrays, métodos: map, filter, forEach, find, reduce
06_funciones.md → Definición, parámetros, return, arrow functions
07_objetos_nativos.md → Math, Date, String methods
08_bucles.md → for, while, for...of, break/continue
09_dom.md → getElementById, querySelector, modificar HTML
10_eventos.md → addEventListener, click, input, submit
```

Para cada uno, usa el patrón anterior reemplazando el tema.

---

## 🎯 PROYECTO FINAL

### Para generar: modulo_1_javascript_frontend/PROYECTO_FINAL.md

```
Actúa como Senior Developer y Mentor educativo.

Generar: PROYECTO_FINAL.md del MÓDULO 1

NOMBRE: Carrito de Compras Interactivo

CONTEXTO:
- Es el PROYECTO INTEGRADOR del Módulo 1
- Estudiante completó todos 10 temas
- Duración: 4-6 horas
- Nivel: INTERMEDIO

INCLUIR:

# 🛒 Proyecto Final: Carrito de Compras Interactivo

## 📝 Descripción
Un carrito de compras funcional donde:
- Ver lista de productos
- Agregar/eliminar items
- Ver total
- Aplicar descuentos
- Guardar en localStorage

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

- Variables y tipos de datos → archivo 01
- Template strings → archivo 02
- Condicionales → archivo 03
- Operadores → archivo 04
- Arrays y métodos → archivo 05
- Funciones → archivo 06
- Objetos nativos → archivo 07
- Bucles → archivo 08
- DOM manipulation → archivo 09
- Eventos → archivo 10

[Enlazar cada uno]

## 💡 Pasos para Implementar

1. [Paso a paso detallado en 15+ pasos]

## 🔍 Casos de Prueba

### Caso 1: Agregar producto
...

### Caso 2: Aplicar descuento
...

### Caso 3: Persistencia
...

## 📊 Rúbrica
- Funcionalidad básica: 40%
- Código limpio: 20%
- Documentación: 15%
- Desafíos extras: 25%

## 🚀 Desafíos Opcionales
1. Filtrar por categoría
2. Cerrar sesión y guardar carrito por usuario
3. Sistema de reviews
4. Recomendaciones de productos

## 📖 Código Ejemplo
[Código completo y comentado]

---

DURACIÓN TOTAL: ~4000 palabras
```

---

## 🔗 MÓDULO 2: NODE.JS

Para Módulo 2, ejecuta el patrón para:

```
modulo_2_nodejs_backend/
  ├── 01_npm.md
  ├── 02_express.md
  ├── 03_arrow_functions.md
  ├── 04_callbacks_vs_promises_async_await.md
  ├── 05_estructuras_de_datos.md
  ├── 06_modulos.md
  ├── 07_formatos_json_xml_yaml.md
  ├── 08_apis_rest.md
  └── PROYECTO_FINAL.md
```

Usa los mismos patrones anteriores.

---

## ✅ CHECKLIST ANTES DE USAR

- [ ] Abre tu IA favorita (Claude, ChatGPT, Gemini)
- [ ] Copia COMPLETO el prompt del archivo que quieres
- [ ] Pégalo en el chat
- [ ] Espera a que se genere
- [ ] Copia el resultado
- [ ] Pega en el archivo .md correspondiente
- [ ] ¡Listo!

---

## ⏱️ Tiempo Estimado

- 1 archivo simple: 2-3 minutos
- 1 proyecto final: 5-8 minutos
- 1 módulo completo (11 archivos): 30-40 minutos
- 2 módulos + índice (23 archivos): 60-90 minutos

---

**¡Éxito con tu documentación!** 🚀
```

---

## 📌 RESUMEN: Lo que Tienes

Ahora tienes **3 archivos poderosos**:

1. **PROMPT_MENTOR_SENIOR.md** ← La guía completa y detallada
2. **GUIA_RAPIDA_USO.md** ← Cómo usar el prompt paso a paso
3. **PROMPTS_PREHECHO.md** ← Prompts listos para copiar/pegar

---

## 🚀 PRÓXIMOS PASOS

Elige uno:

### Opción A: Usar Claude (Recomendado si lo tienes)
1. Abre https://claude.ai
2. Crea nuevo chat
3. Copia un prompt de **PROMPTS_PREHECHO.md**
4. Pega y presiona enviar
5. Espera 2-3 minutos
6. Copia el resultado al archivo .md

### Opción B: Usar ChatGPT Free
Mismo proceso, pero en chatgpt.com

### Opción C: Yo lo genero para ti
Si quieres, puedo rellenar los primeros 3-4 archivos como ejemplo. Dime cuál módulo quieres primero. 👈

---

¿Cuál prefieres hacer ahora?
