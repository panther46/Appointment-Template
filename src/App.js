import React, {Component} from 'react';
import Header from './Componentes/Header.js';
import AgregarCita from './Componentes/AgregarCita.js';
import ListaCitas from './Componentes/ListaCitas.js';



class App extends Component {

// Creando state vacio, se inicia vacio.
  state = {
    citas : []
  }

  // Almacenando en Local Storage, solo permite strings asi que debemos pasar el stado a string
  // Usamos componentDidUpdate, en caso de que haya un refresh o una cita nueva (en caso de que el componente sea actualizao)
  componentDidUpdate(){
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
      }
    

// Cuando el componente este cargado, se obtiene el string y se convierte en arreglo de nuevo con JSON.PARSE
  componentDidMount(){
    const citasLS = localStorage.getItem('citas')
    if (citasLS){
      this.setState({
        citas:JSON.parse(citasLS)
      })
    }
  }



  crearCita = (nuevaCita) => {
    // Se hace una copia del state vacio y se le añada el objeto que viene por el parametro (nuevaCita)
    const citas = [...this.state.citas,nuevaCita]

    // Se re-escribe el state. (Object literal Enhancement)
    this.setState({
      citas
    });

    console.log(citas);
  }

  borrarCita = id =>{
    console.log(id);
    // Obtener copia del state

    const citasActuales = [...this.state.citas]
    // Borrar la cita del state

    const citas = citasActuales.filter(cita => cita.id !== id);

    // Actualizar el state

    this.setState({
      citas
    })
  }

  render(){
    return(

      <div className= "container">
        <Header
          titulo = {'Plantilla para solicitud de citas'}
        />
        <div className = "row">
          <div className = "col-md-6">
            <AgregarCita
              crearCita = {this.crearCita}
            />
          </div>
          <div className = "col-md-6">
            <ListaCitas
            
            citasProps = {this.state.citas}
            borrarCita = {this.borrarCita}
             />
          </div>
        </div>
        
    </div>
    );
  }
}
    

export default App;
