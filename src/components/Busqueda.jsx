import React from 'react'

const Busqueda = ({ filtroPalabra, setFiltroPalabra }) => {
    return (
        <div className="d-flex flex-column align-items-center mb-5">
            <h2>Busqueda de Colaboradores</h2>
            <input
                className="form-control"
                type="text"
                placeholder="A quién buscas?"
                value={filtroPalabra}
                onChange={(e) => setFiltroPalabra(e.target.value)}
            />
        </div>
    );
};

export default Busqueda;
