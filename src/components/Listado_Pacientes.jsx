// import { useEffect } from "react";
import Paciente from "./Paciente";
import PropTypes from 'prop-types';

Listado_Pacientes.propTypes = {
  pacientes: PropTypes.any,
  setPaciente: PropTypes.any,
  eliminarPaciente: PropTypes.any,
};

export default function Listado_Pacientes({pacientes, setPaciente, eliminarPaciente}) {

  // useEffect(() => {
  //   pacientes.length && pacientes ? console.log("Paciente nuevo") : "lel"
  // }, [pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5">
    {pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-white text-3xl text-center mt-10 md:mt-0">Listado de Gymbros</h2>
        <p className="text-lg text-white text-center mt-2 mb-10">
          Administra tus {' '}
          <span className="text-green-400 font-bold underline"> Citas </span>
        </p>
        <div className="max-h-[620px] md:overflow-auto mt-7">
          {pacientes.map( paciente => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
          ))}
        </div>
      </>
    ): 
      <>
        <h2 className="font-black text-white  text-3xl text-center">No has inscrito Gymbros</h2>
        <p className="text-lg text-white  text-center mt-5 mb-10">
          Comienza agregando pacientes {' '}
          <span className="text-green-400 font-bold"> y aparecerán en este lugar </span>
        </p>
      </>
    }
    </div>
  )
}
