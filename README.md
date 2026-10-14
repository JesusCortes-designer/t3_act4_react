<div align="center">

# Instituto Tecnológico de Oaxaca

**Materia:** Programación Web

**Alumno:** Jesús Cortés Cruz

**Docente:** Martínez Nieto Adelina

**Actividad 4:** Introducción a React - Fundamentos y Primer Componente

</div>

---

# Lista de Tareas - React

Mini aplicación hecha con **React + Vite** para la Actividad 4 de Programación Web.
Permite agregar tareas, marcarlas como completadas y eliminarlas.

## Qué incluye
- **Componente simple:** `App`.
- **Componente con props:** `TodoApp` recibe `titulo` y `notasIniciales`.
- **Componente con estado:** `TodoApp` usa `useState` para las notas y el texto del input.
- **Lista dinámica:** las tareas se muestran con `.map()` usando `key`.

## Cómo ejecutarlo
    npm install
    npm run dev

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?
Las props son datos que un componente padre le envía a un componente hijo. El hijo solo las lee y no puede modificarlas. El state es información propia del componente que puede cambiar con el tiempo, y cuando cambia React vuelve a renderizar el componente. En mi app, `titulo` y `notasIniciales` son props, y la lista de `notas` es state.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La key le permite a React identificar cada elemento de la lista de forma única. Gracias a eso, cuando se agrega, elimina o cambia un elemento, React actualiza solo lo necesario en lugar de volver a dibujar toda la lista, y evita errores visuales. En mi app uso `key={nota.id}`.

### c) ¿Qué hace useState y dónde lo usé?
`useState` es un hook que permite guardar un valor dentro de un componente y modificarlo. Devuelve el valor actual y una función para actualizarlo. Al usar esa función, React vuelve a renderizar el componente con el nuevo valor. En mi app lo usé en `const [notas, setNotas] = useState(notasIniciales)` para guardar las tareas, y en `const [texto, setTexto] = useState('')` para guardar lo que escribe el usuario en el input.

### d) Repositorio de GitHub
https://github.com/JesusCortes-designer/t3_act4_react
### e) Proyecto desplegado
https://jesuscortes-designer.github.io/t3_act4_react/