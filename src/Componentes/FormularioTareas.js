import react, {Component} from 'react';

class FormularioTarea extends Component{

    state={
        titulo:'',
        descripcion:''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.agregarTarea(this.state.titulo,this.state.descripcion);
    }

    onChange = (e)=>{
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

        render(){
            console.log(this.props)
            return(
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="titulo" value={this.state.titulo} onChange={this.onChange} placeholder="Ingrese el titulo"></input>
                    <br/>
                    <textarea name="descripcion" value={this.state.descripcion} onChange={this.onChange} rows="4" placeholder="Escriba la descripcion de la tarea"></textarea>
                    
                    
                    <br/>
                    <button type="submit">Guardar</button>
                </form>
            )

        }
    
}
export default FormularioTarea;