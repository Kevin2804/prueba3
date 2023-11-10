import react, {Component} from 'react';
import Tarea from './Tarea';

class Tareas extends Component{
    render(){
        return this.props.tareas.map(tarea => <Tarea tarea={tarea}
             Key={tarea.id} 
             borrarTarea={this.props.borrarTarea}
             marcarHecho={this.props.marcarHecho} />)
    }
}
export default Tareas;