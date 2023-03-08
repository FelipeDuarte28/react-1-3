import React from 'react'

const Colaboradores = ({ usuarios, filtroPalabra }) => {

    let filtro = [];
    if (!filtroPalabra) {
        filtro = usuarios;
    } else {
        filtro = usuarios.filter(
            (user) =>
                user.nombre.toLowerCase().includes(filtroPalabra.toLowerCase()) ||
                user.correo.toLowerCase().includes(filtroPalabra.toLowerCase())
        );

    }

     return (
        <div className="d-flex flex-column align-items-center">
            <h3 className="fw-bold">Lista de colaboradores</h3>
            <div>
                {filtro.map(colaborador => <p key={colaborador.id}> {colaborador.nombre} - {colaborador.correo} </p>)}
            </div>
        </div>
    )
}

export default Colaboradores