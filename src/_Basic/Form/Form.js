import react from 'react'
import { render } from 'react-dom'

class Form extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Dai',
            On: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(' State: ',this.state.value, this.state.On);
        //! Comment the below line with <select> content
        // this.setState({value: ''}); 
        
    }
    handleChange( event ){
        if( event.target.type === 'checkbox')
        this.setState({ On : event.target.checked}) 
        else
        this.setState({ value : event.target.value });
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <input type="number" value={this.state.value} onChange={this.handleChange} /> */}
                {/* <textarea value={this.state.value? this.state.value : 'Please type in'} onChange={this.handleChange}/> */}
                {/* <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Dai">Dai</option>
                    <option value="Dong">Dong</option>
                    <option value="Duc">Duc</option>
                </select> */}
                <input name="notrobot" type="checkbox" checked={this.state.On} onChange={this.handleChange}/>
                I'm not a robot
                <button type="submit">OK</button>
            </form>
        )
    }
}



export default Form