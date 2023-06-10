import PropTypes from 'prop-types';

Paciente.propTypes = {
  paciente: PropTypes.any,
  setPaciente: PropTypes.any,
  eliminarPaciente: PropTypes.any,
};

export default function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const {nombreMascota, nombrePropietario, email, fecha, sintomas, id} = paciente

  const handleEliminar = () => {
    const respuesta = confirm ('Deseas Eliminar?');

    if(respuesta)
    {
      eliminarPaciente(id)
    }
  }

  return (
    <div>
        <div className="bg-gray-100 shadow-md rounded-lg py-6 px-5 mx-5 mb-3">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-medium normal-case">{nombreMascota}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-medium normal-case">{nombrePropietario}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-medium normal-case">{email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {''}
            <span className="font-medium normal-case">{fecha}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {''}
            <span className="font-medium normal-case">{sintomas}</span>
          </p>
          <div className='flex justify-between mt-5'>
            <button 
            type='button' 
            className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
            onClick={() => setPaciente(paciente)}
            >
              Editar
            </button>
            <button 
            type='button' 
            className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md'
            onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
        </div>
    </div>
  )
}
