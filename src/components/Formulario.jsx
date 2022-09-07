import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [raza, setRaza] = useState("");
  const [dueño, setDueño] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setRaza(paciente.raza);
      setDueño(paciente.dueño);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validacion del formulario
    if ([nombre, raza, dueño, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacío");
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      raza,
      dueño,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setRaza("");
    setDueño("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-thin text-3xl text-center">
        Registro de los pacientes
      </h2>
      <p className="text-md mt-3 text-center mb-10">
        Añade pacientes y {""}{" "}
        <span className="text-green-400 font-bold text-md">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white border shadow-xl rounded-sm py-10 px-5 mb-10 mx-5"
      >
        {error && <Error mensaje="Todos los campos son obligatorios!" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block uppercase font-thin-bold text-black"
          >
            Nombre del paciente:{" "}
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="raza"
            className="block uppercase font-thin-bold text-black"
          >
            Raza:{" "}
          </label>
          <input
            id="raza"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            type="text"
            placeholder="Raza"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block uppercase font-thin-bold text-black"
          >
            Nombre del dueño:{" "}
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            type="text"
            placeholder="Nombre del dueño"
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block uppercase font-thin-bold text-black"
          >
            Email:{" "}
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            type="email"
            placeholder="Email de contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block uppercase font-thin-bold text-black"
          >
            Fecha de nacimiento:{" "}
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="dueño"
            className="block uppercase font-thin-bold text-black"
          >
            Síntomas:{" "}
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm border-gray-200 text-black"
            placeholder="Describe los síntomas de tu mascota"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-green-500 text-white font-bold w-full p-3 border-none hover:bg-green-600 cursor-pointer hover:text-white transition ease-out"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
