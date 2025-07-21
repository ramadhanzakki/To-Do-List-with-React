import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //state for control input field and save task list
  const [tugas,setTugas] = useState([
    {id : 1, teks : 'belajar react'}
  ])
  const [input,setInput] = useState('')

  //function for adding task
  function handleAddTask(event) {
    //delete the default browser reload tab
    event.preventDefault();

    //checking the input field
    if (input .trim === '') {
      return;
    }

    //new obj for nerw task
    const newTask = {
      id: Date.now(),
      teks: input,
    }

    //adding new obj to the 'tugas'
    setTugas([...tugas, newTask])

    //set to clear the input field
    setInput('')
  }

  //function for delete task
  function handleDeleteTask(idTask) {
    //create new array without deleted task
    const taskAfterDeleted = tugas.filter(t => t.id !== idTask)
    //set 'tugas' with new array
    setTugas(taskAfterDeleted)
  }

  return (
    <div className="app-container">
      <h1>My Task</h1>

      <form className='form-tugas' onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type='submit'>Tambah</button>
      </form>

      <ul className='daftar-tugas'>
        {tugas.map(taskItem => (
          <li key={taskItem.id}>
            <span>{taskItem.teks}</span>
            <button className='tombol-hapus' onClick={() => handleDeleteTask(taskItem.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
