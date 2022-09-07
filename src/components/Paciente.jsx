const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, raza, dueño, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(
      `¿Estas seguro de eliminar el paciente ${nombre}?`
    );

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-5 bg-white border shadow-xl rounded-sm py-10 px-5 mb-5">
      <p className="uppercase font-bold text-black">
        Nombre del paciente: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {nombre}
        </span>
      </p>
      <p className="uppercase font-bold text-black">
        Raza: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {raza}
        </span>
      </p>
      <p className="uppercase font-bold text-black">
        Nombre del dueño: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {dueño}
        </span>
      </p>
      <p className="uppercase font-bold text-black">
        Email: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {email}
        </span>
      </p>
      <p className="uppercase font-bold text-black">
        Fecha de Nacimiento: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {fecha}
        </span>
      </p>
      <p className="uppercase font-bold text-black">
        Síntomas: {""}
        <span className="font-thin text-2xl normal-case text-black">
          {sintomas}
        </span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-10 mt-2 bg-green-500 text-white font-bold border-none hover:bg-green-600 cursor-pointer hover:text-white transition ease-out "
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 mt-2 bg-red-600 text-white font-bold border-none hover:bg-red-500 cursor-pointer hover:text-white transition ease-out "
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
