# 🚀 GUÍA RÁPIDA - Cómo Usar el Prompt

## Opción Rápida: Copiar y Pegar

### 📝 Para generar UN archivo conceptual

```
Actúa como un Senior Developer Fullstack y Mentor Educativo.

Necesito que generes documentación educativa de calidad profesional.

ARCHIVO A GENERAR: 01_variables.md
MÓDULO: JavaScript Frontend (Aula 1: Conceptos Básicos)
CONTEXTO: Es el PRIMER archivo. El estudiante es principiante, nunca ha programado.

ESTRUCTURA REQUERIDA (en este ORDEN exacto):

1. Encabezado con Módulo, Dificultad (Principiante), Tiempo estimado (~20 min), Prerequisitos (Ninguno)

2. Introducción (2-3 párrafos explicando qué son variables, por qué importan, donde se usan)

3. Conceptos Teóricos:
   - Qué es una variable (espacio en memoria)
   - Tipos: string, number, boolean
   - Palabras clave: var, let, const
   - Diferencias entre ellas

4. MOSTRAR ANTIGUO vs MODERNO:
   - var (antiguo, evitar)
   - let (moderno, recomendado)
   - const (moderno, recomendado)

5. Ejemplos progresivos (MÍNIMO 5):
   a) Variable simple (string)
   b) Variable número
   c) Variable booleana
   d) Diferencia var vs let vs const
   e) Hoisting behavior

   PARA CADA EJEMPLO:
   - Mostrar código
   - Explicación línea por línea
   - Salida esperada
   - Diagrama visual si aplica

6. Casos de Uso Real Profesional (MÍNIMO 2):
   - En Frontend: ejemplo de una tienda online usando variables
   - En Backend: ejemplo de Node.js manejando datos de usuario
   - Frecuencia de uso: ⭐⭐⭐⭐⭐

7. Errores Comunes (MÍNIMO 3):
   - Error: Usar var en 2024
   - Error: Confundir const con inmutabilidad
   - Error: Redeclarar variables con let

8. 3 Ejercicios Progresivos:
   - Nivel 1 (5 min): Crear 3 variables básicas
   - Nivel 2 (15 min): Crear un sistema simple de usuario
   - Nivel 3 (30 min): Mini proyecto con validación

9. Checklist de Comprensión (7-8 items)

10. Recursos y referencias

TON: Amigable, claro, sin jerga innecesaria, profesional
LONGITUD: ~2000-2500 palabras
CÓDIGO: JavaScript 2024 (ES2023+)
```

---

### 🎯 Para PROYECTO FINAL del módulo

```
Actúa como Senior Developer Fullstack y Mentor.

GENERAR: modulo_1_javascript_frontend/PROYECTO_FINAL.md

CONTEXTO:
- Es el PROYECTO FINAL del Módulo 1 (JavaScript Frontend)
- El estudiante ya completó topics: variables, concatenación, condicionales, operadores, arrays, funciones, objetos nativos, bucles, DOM y eventos
- Nivel de dificultad: INTERMEDIO-AVANZADO
- Duración esperada de proyecto: 4-6 horas

DESARROLLO DEL PROYECTO:

Nombre: "CARRITO DE COMPRAS INTERACTIVO"

Requisitos:
- Funcionalidad listada en checklist
- Usar HTML + CSS + JavaScript
- Manejar DOM manipulation
- Manejar eventos
- Manejar arrays
- Manejar objetos
- Validación de datos

Incluir:
1. Descripción clara del proyecto
2. 5-6 Objetivos específicos
3. Estructura de carpetas esperada
4. Todos los conceptos que debe aplicar con LINKS a esos archivos
5. Pasos detallados para implementar (10+ pasos)
6. 4-5 Casos de prueba (qué hacer y qué esperar)
7. Rúbrica de evaluación (porcentajes)
8. 3 DESAFÍOS OPCIONALES más complejos
9. CÓDIGO EJEMPLO completo y comentado
10. Concepto de testing manual

DESAFÍOS OPCIONALES ejemplo:
- Agregar localStorage para persistencia
- Implementar descuentos por cantidad
- Filtros por categoría

TON: Motivador, profesional, realista
LONGITUD: ~3000-4000 palabras
```

---

### 📚 Para el ÍNDICE (index.md)

```
Actúa como Senior Developer y Customer Success Manager.

GENERAR: index.md
DESCRIPCIÓN: Tabla de contenidos maestra y guía de navegación completa

ESTRUCTURA:

1. Banner de bienvenida (2-3 líneas motivadoras)

2. SECCIÓN: "Cómo Usar Este Material"
   - Para principiantes sin experiencia
   - Para personas con experiencia
   - Para personas colocándose en trabajo técnico

3. TABLA DE CONTENIDOS INTERACTIVA:

   MÓDULO 1: JavaScript Frontend
   | Archivo | Tema | Dificultad | Duración | Conceptos Clave |
   |---------|------|-----------|----------|-----------------|
   | 01_variables.md | Variables | Principiante | 20 min | var/let/const |
   | 02_concatenacion_template_strings.md | Strings | Principiante | 15 min | + y templates |
   | ... | ... | ... | ... | ... |
   | PROYECTO_FINAL.md | Proyecto Integrador | Intermedio | 4-6h | TODOS |

   MÓDULO 2: Node.js Backend
   | ... |

4. RUTA RECOMENDADA (flowchart)
   Mostrar el orden sugerido para aprender

5. ESTADÍSTICAS:
   - Tiempo total estimado
   - Número de conceptos
   - Número de ejercicios
   - Número de desafíos

6. HABILIDADES QUE TENDRÁS AL FINAL:
   - [ ] Crear aplicaciones interactivas en JavaScript
   - [ ] Entender asincronía y promises
   - [ ] Crear APIs con Node.js y Express
   - [ ] Manejar bases de datos

7. REQUISITOS PREVIOS:
   - Sabe programación básica? No = entra aquí
   - Sabe Python? Si = puedes saltar esto

8. RECURSOS COMPLEMENTARIOS:
   - Herramientas necesarias
   - Información adicional
   - Comunidades

9. FAQ:
   - "¿Cuánto tiempo demora?"
   - "¿Puedo saltatme algo?"
   - etc

TONO: Bienvenida, claro, profesional
LONGITUD: ~1500-2000 palabras
```

---

## 🎬 PASO A PASO RECOMENDADO

### Día 1: Generar Módulo 1 Completo

1. Copia el prompt base de `PROMPT_MENTOR_SENIOR.md`
2. Pega en Claude/ChatGPT/Gemini
3. Agrega al final:

```
AHORA GENERA ESTOS ARCHIVOS DEL MÓDULO 1 (JavaScript Frontend):

1. 01_variables.md
2. 02_concatenacion_template_strings.md
3. 03_condicionales.md
4. 04_operadores.md
5. 05_arrays.md

Mantén EXACTA la estructura especificada.
Cada archivo MÍNIMO debe tener:
- 3 ejemplos progresivos
- 3 ejercicios (básico, intermedio, avanzado)
- Sección antiguo vs moderno
- 2 casos reales profesionales
- Errorónes comunes
- Checklist final

Asegúrate que el SIGUIENTE archivo pueda referenciar al anterior con [Link](01_variables.md)
```

### Día 2: Continuar con Módulo 1

```
Continúa con estos archivos del MÓDULO 1:

6. 06_funciones.md
7. 07_objetos_nativos.md
8. 08_bucles.md
9. 09_dom.md
10. 10_eventos.md

Después de cada archivo, VALIDA:
- ¿Es comprensible para un principiante?
- ¿Tiene ejemplos reales?
- ¿Los ejercicios son progresivos?
```

### Día 3: Proyecto Final Módulo 1

```
Ahora genera el PROYECTO FINAL:

Archivo: modulo_1_javascript_frontend/PROYECTO_FINAL.md

Proyecto: Carrito de Compras Interactivo

Que integre TODOS los conceptos del módulo 1:
- Variables
- Strings
- Condicionales
- Operadores
- Arrays
- Funciones
- Objetos
- Bucles
- DOM
- Eventos

Incluye:
- Código ejemplo completo
- 3 desafíos opcionales
- Casos de prueba
- Rúbrica de evaluación
```

### Días 4-6: Generar Módulo 2

Repite el proceso para `modulo_2_nodejs_backend/`

### Día 7: Crear Índice Maestro

```
Ahora que tenemos todo generado, crea el: index.md

Este será la TABLA DE CONTENIDOS y GUÍA principal.

Debe:
- Resumir todos los archivos
- Explicar el flujo de aprendizaje
- Tener tablas interactivas
- Dar consejos de estudio
```

---

## 💡 TRUCOS PRO

### Si la IA genera algo muy largo:
```
"Ese archivo quedó muy largo. Resumelo a máximo X palabras manteniendo:
- Todos los ejemplos
- Los 3 ejercicios
- La sección antiguo vs moderno"
```

### Si quieres más ejemplos visuales:
```
"En la sección de {sección}, agrega diagramas ASCII o tablas comparativas para explicar mejor."
```

### Si quieres reescribir una sección:
```
"Reescribe la sección de 'Casos Reales Profesionales' pero enfócate más en uso en e-commerce"
```

### Para validar calidad:
```
"Como revisor de código senior, ¿qué tan bueno es este contenido para un junior developer?
¿Qué le falta o sobra?"
```

---

## 📊 Checklist Antes de Usar

Antes de pedir a la IA que genere:

- [ ] ¿Tengo el archivo `PROMPT_MENTOR_SENIOR.md` disponible?
- [ ] ¿Sé qué archivo específico quiero generar?
- [ ] ¿Tengo contexto del módulo y nivel del estudiante?
- [ ] ¿Sé cuánto tiempo debe tardar el estudiante?
- [ ] ¿Tengo ejemplos de qué quiero que genere?

---

## 🎯 Ejemplo Completo (Listo para Copiar)

### Solicitud para generar UN archivo:

```markdown
Actúa como un Senior Developer Fullstack y Mentor Educativo con experiencia en Node.js, JavaScript y React.

Tu objetivo: Crear documentación educativa de calidad profesional.

[COPIA COMPLETA EL CONTENIDO DE PROMPT_MENTOR_SENIOR.md AQUÍ]

---

AHORA GENERA ESTE ARCHIVO ESPECÍFICO:

📄 **Archivo:** 01_variables.md
📚 **Módulo:** JavaScript Frontend (Aula 1 - Conceptos Básicos)
🎓 **Nivel:** Principiante (Aula 1 - Sin experiencia previa)
⏱️ **Duración:** ~20 minutos de lectura + 30 min de ejercicios
🔗 **Prerequisitos:** Ninguno - Es el PRIMER archivo

**CONTEXTO:**
- Este es el primer archivo que lee el estudiante
- Nunca ha programado en su vida
- Necesita entender conceptos de variable de forma muy clara
- Debe ser amigable pero profesional
- Incluir muchos ejemplos visuales

**INSTRUCCIONES ADICIONALES:**
1. Sigue EXACTAMENTE la estructura de PROMPT_MENTOR_SENIOR.md
2. Mínimo 5 ejemplos progresivos
3. Mínimo 3 ejercicios (básico, intermedio, avanzado)
4. IMPORTANTE: Mostrar var (antiguo) vs let/const (moderno)
5. Incluir 2 casos reales en el mundo profesional
6. 3-4 errores comunes con soluciones
7. Diagrama o visual para entender memoria/variables
8. Recursos de documentación oficial
```

---

**¿Listo?** Copia el prompt anterior completo, pégalo en tu IA favorita y solicita los archivos.

Duración total estimada:
- 1 archivo simple: 2-3 minutos
- 1 proyecto final: 5-10 minutos
- TODO el módulo (11 archivos): 30-45 minutos
