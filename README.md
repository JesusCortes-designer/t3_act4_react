<div align="center">

# Instituto Tecnológico de Oaxaca

**Materia:** Programación Web

**Alumno:** Jesús Cortés Cruz

**Docente:** Martínez Nieto Adelina

**Actividad 4:** Introducción a React - Fundamentos y Primer Componente

</div>

---

# Lista de Tareas - React

Para esta actividad hice una mini aplicación con React y Vite. En ella puedo agregar tareas, marcarlas como completadas y eliminarlas.

## Qué incluye mi proyecto
- **Componente simple:** `App`, que muestra la aplicación.
- **Componente con props:** `TodoApp` recibe `titulo` y `notasIniciales` desde `App`.
- **Componente con estado:** en `TodoApp` uso `useState` para guardar las tareas y el texto del input.
- **Lista dinámica:** muestro las tareas con `.map()` y le doy a cada una su `key`.
- **Eventos:** uso `onSubmit` para agregar tareas, `onChange` para leer lo que escribo y `onClick` para completar y eliminar.

## Cómo ejecutarlo
```bash
npm install
npm run dev
```

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?
Las props son datos que un componente recibe de otro y no se pueden cambiar. El state son datos del propio componente que sí pueden cambiar. En mi app, el título es una prop y la lista de tareas es state.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
Porque así React identifica cada elemento de la lista y, cuando agrego o elimino uno, solo actualiza ese y no toda la lista.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
useState sirve para guardar un valor en un componente y poder cambiarlo. Cuando el valor cambia, la pantalla se actualiza. Yo la usé para guardar la lista de tareas y el texto que escribo en el input.

### d) Enlace de mi repositorio de GitHub
https://github.com/JesusCortes-designer/t3_act4_react

### e) Enlace de mi proyecto desplegado en GitHub Pages
https://jesuscortes-designer.github.io/t3_act4_react/