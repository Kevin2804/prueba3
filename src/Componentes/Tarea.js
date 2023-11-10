import react, {Component} from 'react';

class Tarea extends Component{

    TareaHecha(){
        return{
            fontSize:'20px',
            color: this.props.tarea.estado ? 'gray':'black',
            textDecoration: this.props.tarea.estado ? 'line-through':'none'  
        }
    }
    /* dwdwqdwqdwqdqwwdq
*/
    render(){

        const btnBorrar= {
            fontSize: '18px',
            background: '#ea2027',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '50%',
            cursor: 'pointer',
        }

        return <div style={this.TareaHecha()}>
            {this.props.tarea.titulo} -
            {this.props.tarea.descripcion} -
            {this.props.tarea.id} 
            <input type="checkbox" onChange={this.props.marcarHecho.bind(this,this.props.tarea.id)}></input>
            <button style={btnBorrar} onClick={this.props.borrarTarea.bind(this,this.props.tarea.id)} >X</button>
        </div>
    }
}
export default Tarea;