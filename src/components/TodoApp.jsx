import { useState } from 'react'

function TodoApp({ titulo, notasIniciales }) {
    console.log('Prop titulo:', titulo)
  console.log('Prop notasIniciales:', notasIniciales)

  const [notas, setNotas] = useState(notasIniciales) //hooks
  const [texto, setTexto] = useState('')

  const agregarNota = (e) => {
    e.preventDefault()
    if (texto.trim() === '') return
    setNotas([...notas, { id: Date.now(), text: texto, completed: false }])
    setTexto('')
  }

  const eliminarNota = (id) => {
    setNotas(notas.filter((nota) => nota.id !== id))
  }

  const completarNota = (id) => {
    setNotas(
      notas.map((nota) =>
        nota.id === id ? { ...nota, completed: !nota.completed } : nota
      )
    )
  }

  return (
    <>
      <h1 className="titulo">{titulo}</h1>

      <form className="formulario" onSubmit={agregarNota}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button type="submit" className="btn-agregar">Agregar</button>
      </form>

      <ul className="note-list">
        {notas.map((nota) => (
          <li
            key={nota.id}
            className={nota.completed ? 'note-item completada' : 'note-item'}
          >
            <span>{nota.text}</span>
            <div className="acciones">
              <button className="btn-completar" onClick={() => completarNota(nota.id)}>
                {nota.completed ? 'Desmarcar' : 'Completar'}
              </button>
              <button className="btn-eliminar" onClick={() => eliminarNota(nota.id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoApp