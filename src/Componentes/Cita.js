import React, {Component} from 'react';

class Cita extends Component  {


    eliminarCita = () =>{
        
       this.props.borrarCita(this.props.info.id);
    };

    render(){
    // Destructuring de objeto recibido por props
    const {fecha, hora, mascota, dueño, sintomas} = this.props.info;

    return(
        <div className = "media mt-3">
            <div className = "media-body">
                <h3 className = "mt-0">{mascota}</h3>
                <p className = "card-text"><span>Nombre del Dueño:</span>{dueño}</p>
                <p className = "card-text"><span>Fecha:</span>{fecha}</p>
                <p className = "card-text"><span>Hora:</span>{hora}</p>
                <p className = "card-text"><span>Sintomas:</span></p>
                <p className = "card-text">{sintomas}</p>
                <button onClick = {this.eliminarCita} className= "btn btn-danger">Eliminar cita &times;</button>
            </div>
        </div>
    );
    }
}



export default Cita;