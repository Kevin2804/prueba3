import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Tareas from './Componentes/Tareas.js'
import tareas from './Datos/tareas.json'
import FormularioTarea from './Componentes/FormularioTareas';
console.log(tareas);

class App extends Component{

  state = {
    tareas:tareas
  }

  borrarTarea = (id) =>{
    const nuevasTareas = this.state.tareas.filter(tarea =>tarea.id !==id);
    this.setState({tareas:nuevasTareas})
    console.log(nuevasTareas);
  }

  agregarTarea= (titulo,descripcion) =>{
    console.log(titulo,descripcion)
    const nuevaTarea ={titulo:titulo, descripcion:descripcion,id:(this.state.tareas.length+1)}
    console.log(nuevaTarea);
    this.setState({
      tareas:[...this.state.tareas,nuevaTarea]
    })
  }

  marcarHecho = (id) =>{
    const nuevasTareas = this.state.tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.estado = !tarea.estado
      }
      return tarea;
      
    });
    this.setState({tareas: nuevasTareas})
  }
  
  render(){
    
    return <div>
      <FormularioTarea agregarTarea={this.agregarTarea}/>
      <Tareas tareas={this.state.tareas} borrarTarea={this.borrarTarea} marcarHecho={this.marcarHecho} />

    </div>
  }
}

export default App;
