import {useState, useEffect} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

Formulario.propTypes = {
  pacientes: PropTypes.any,
  setPacientes: PropTypes.any,
  paciente: PropTypes.any,
  setPaciente: PropTypes.any,
};

export default function Formulario({pacientes, setPacientes, paciente, setPaciente}) {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect( () => {
    if(Object.keys(paciente).length > 0)
    {
      setNombreMascota(paciente.nombreMascota)
      setNombrePropietario(paciente.nombrePropietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)    
    }
  }, [paciente])


  const generarId= ( () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now(). toString(36);

    return random + fecha;  

  })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Enviando Formulario")

    // Validación Formulario
    if([nombreMascota, nombrePropietario, email, fecha, sintomas].includes(''))
    {
      // console.log('Hay un espacio vacío')
      setError(true)
      return;
    }

    setError(false)

    const objectoPaciente = {
      nombreMascota, 
      nombrePropietario, 
      email, 
      fecha, 
      sintomas
    }

    //Existe ese registro id?
    if (paciente.id)
    {
      //Editando registro
      objectoPaciente.id = paciente.id
      console.log(paciente)
      console.log(objectoPaciente)

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})
    }
    else
    {
      //Nuevo registro
      objectoPaciente.id = generarId();
      setPacientes([...pacientes, objectoPaciente])
      
    }
    
    // Reiniciar el Formulario
    setNombreMascota('')
    setNombrePropietario('') 
    setEmail('')
    setFecha('') 
    setSintomas('')
  }

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5 mx-5 mb-0">
        <h2 className="font-black text-white  text-3xl text-center">Inscripciones de Gymbro</h2>
        <p className="text-lg text-white text-center mt-2 mb-10">
          Añade Pacientes y {' '}
          <span className="text-green-400 font-bold underline"> Adminístralos </span>
        </p>

        <form 
        onSubmit={handleSubmit}
        className="bg-gray-100 shadow-md rounded-lg py-10 px-5"
        >
          {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
          <div className="mb-2">
            <label htmlFor="mascotaNombre" className="block text-gray-700 uppercase font-bold"> Nombre Referente </label>
            <input
            id="mascotaNombre"
            type="text"
            placeholder="Nombre de referente"
            className="border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md"
            value={nombreMascota}
            onChange={(e) => setNombreMascota(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="propietarioNombre" className="block text-gray-700 uppercase font-bold"> Nombre Interesado </label>
            <input 
            id="propietarioNombre"
            type="text" 
            placeholder="Nombre del interesado"
            className=" border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Correo Electrónico </label>
            <input 
            id="email"
            type="email" 
            placeholder="Correo Electrónico de interesado"
            className=" border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold"> Fecha de Inicio </label>
            <input 
            id="alta"
            type="date" 
            className=" border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Estado Físico </label>
            <textarea 
            name="" 
            id="sintomas" 
            className=" border-2 w-full my-2 p-2 placeholder-gray-400 rounded-md"
            placeholder="He hecho gym anteriormente..."
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          <input 
          type="submit" 
          value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          className=" bg-green-600 text-white w-full p-3 uppercase font-bold hover:bg-green-700 cursor-pointer rounded-xl hover:rounded-3xl transition-all"
          />
        </form>
      </div>
    </>
  )
}
