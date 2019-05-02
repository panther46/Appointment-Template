import React, {Component} from 'react';
import uuid from 'uuid';


class AgregarCita extends Component{

    // Creando Ref 

    nombreMascotaRef = React.createRef();
    nombreDueñoRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();


    state = {}

    crearNuevaCita = (e) =>{
        e.preventDefault();

        // Creando el objeto con los datos obtenidos por medio de ref, se crean las variables en primera instancia
        const mascota = this.nombreMascotaRef.current.value,
              dueño = this.nombreDueñoRef.current.value,
              fecha = this.fechaRef.current.value,
              hora = this.horaRef.current.value,
              sintomas = this.sintomasRef.current.value;
        // Object Literal Enhancement (El nombre de la propiedad del objeto es igual a la variable previamente declarada).
        const nuevaCita = {
            id:uuid(),
            mascota,
            dueño,
            fecha,
            hora,
            sintomas

        }
        // Se envia el objeto hacia el padre
        this.props.crearCita(nuevaCita);
        // Reiniciar el formulario 
        e.currentTarget.reset();
    }
    
    render(){
        return(
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className= "card-tittle text-center mb-5">Agregar las Citas Aqui</h2>
                        <form onSubmit = {this.crearNuevaCita}>
                            <div className="form-group row">
                                <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                                <div className="col-sm-8 col-lg-10">
                                    <input ref= {this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                                </div>
                                     </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                                    <div className="col-sm-8 col-lg-10">
                                        <input ref= {this.nombreDueñoRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                                    <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                        <input  ref= {this.fechaRef} type="date" className="form-control" />
                                    </div>                            

                                    <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                                    <div className="col-sm-8 col-lg-4">
                                        <input ref = {this.horaRef} type="time" className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                                    <div className="col-sm-8 col-lg-10">
                                        <textarea  ref = {this.sintomasRef} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="form-group row justify-content-end">
                                    <div className="col-sm-3">
                                        <button type="submit" className="btn btn-success w-100">Agregar</button>
                                    </div>
                                </div>
                        </form>
                </div>
                
            </div>

        );
}
}


export default AgregarCita;