import './index.css'
import './App.css'
import TodoApp from './components/TodoApp'

const notas = [
  { id: 1, text: 'Aprender React', completed: true },
  { id: 2, text: 'Hacer la tarea de Classroom', completed: false },
  { id: 3, text: 'Desplegar en GitHub Pages', completed: false },
]

function App() {
  return (
    <section className="container">
      <TodoApp titulo="Mi lista de tareas" notasIniciales={notas} />
    </section>
  )
}

export default App