import React, {Component} from 'react';
import Header from './Componentes/Header.js';
import AgregarCita from './Componentes/AgregarCita.js';


class App extends Component {

  crearCita = () => {
    console.log("desde APP.JS");
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
