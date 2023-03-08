import React, { useState } from "react";
import Error from "./Error";
import { randomID } from '../helpers/randomID'

const Inputs = ({ usuarios, setUsuarios }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [error, setError] = useState(false)

////////////////////Se define qué pasa cuando se agrega un colaborador////
    const handleSubmit = e => {
        e.preventDefault() //Previene el GET y que se actualice la página

        if ([nombre, correo].includes('')) { //Si los campos están vacios lanza error, y no ejecuta el resto del código
            setError(true)
            return
        }
        setError(false) // si no se cumple el IF entonces se crea un nuevo colaborador/usuario, se agrega a la lista y se "resetean" los campos

        const nuevoUsuario = {
            id: randomID(),
            nombre,
            correo
        }

        setUsuarios([...usuarios, nuevoUsuario])
        setNombre('')
        setCorreo('')
    }
///////////////////////////////////////////////////////////////////////////////
    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="text-primary px-3">Agregar Colaboradores</h2>
            <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                {error && <Error msg='Faltan campos' />}
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="nombre"></label>
                    <input
                        className="form-control form-control-lg m-4"
                        type="text"
                        placeholder="Ingresa nombre del colaborador"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="d-flex flex-column align-items-center mb-3">
                    <label htmlFor="correo"></label>
                    <input
                        className="form-control form-control-lg mx-4"
                        type="email"
                        placeholder="Ingresa correo del colaborador"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <button className="btn btn-lg btn-warning">Agrega colaborador</button>
            </form>
        </div>
    );
};

export default Inputs;
