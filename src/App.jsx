import {useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado_Pacientes from './components/Listado_Pacientes'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  function eliminarPaciente(id) {

    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  // LocalStorage
  useEffect(() =>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className='container mx-auto mt-10'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        paciente = {paciente}
        setPaciente = {setPaciente}
        />
        <Listado_Pacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>   
    </div>
  )
}

export default App
