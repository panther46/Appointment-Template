import React from 'react';
import Cita from './Cita.js';
import PropTypes from 'prop-types';



const ListaCitas = (props) => {

    // Se obtiene el objeto desde app.
    const citas = props.citasProps;
    // Se hace la logica de este componente, se obtiene el numero de objetos que son devueltos y por medio de un ternario se hace el condicional
    const mensaje=  Object.keys(citas).length === 0 ? ' No hay citas' : ' Administra tus citas aqui';

    return(
        <div className = "card - mt-5">
            <div className = "card-body">
                <h2 className="card-tittle text-center">{mensaje}</h2>
                <div className= "lista-citas">
                        {Object.keys(citas).map(cita => (
                            <Cita
                                key = {cita}
                                info = {props.citasProps[cita]}
                                borrarCita = {props.borrarCita}
                            />
                        ))}
                    
                </div>
            </div>
        </div>


    )
}

ListaCitas.propTypes = {
    citasProps: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}



export default ListaCitas;