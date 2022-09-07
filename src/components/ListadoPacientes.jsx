import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-thin text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-md mt-3 text-center mb-10">
            Administra tus {""}{" "}
            <span className="text-green-400 font-bold text-md">Pacientes</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-thin text-3xl text-center">
            No hay pacientes registrados
          </h2>
          <p className="text-md mt-3 text-center mb-10">
            Agrega tus pacientes {""}{" "}
            <span className="text-green-400 font-bold text-md">
              Podrás verlos y administrarlos
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
