import React, {Component} from 'react';
import Header from './Componentes/Header.js';
import AgregarCita from './Componentes/AgregarCita.js';



class App extends Component {

// Creando state vacio, se inicia vacio.
  state = {
    citas : []
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
        </div>
        
      </div>
    );
  }
}
    

export default App;
