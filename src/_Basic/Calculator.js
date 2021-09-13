import react from 'react'

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert( temperature , converter ){
    const input = parseFloat(temperature);
    if( Number.isNaN(input) ){
        return ''
    }
    const output = converter(input);
    const rounded = Math.round(output * 1000 ) / 1000;
    return rounded.toString();    
}

class TempartureInput extends react.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.handleInputChange( e.target.value );
    }

    render(){
        const temperature = this.props.temperature;
        const degree = this.props.degree_type;
        return (
            <div>
                <h3>Enter Temperature in {degree} type</h3>
                <input value={temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}
class Calculator extends react.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: 0,
            degree_type: 'c' 
        }
        this.handleChangeF = this.handleChangeF.bind(this) 
        this.handleChangeC = this.handleChangeC.bind(this) 
    }

    handleChangeF(temperature){
        this.setState({degree_type: 'f', temperature});
    }

    handleChangeC(temperature){
        this.setState({degree_type: 'c', temperature});
    }

    render(){
        const temperature = this.state.temperature;
        const degree = this.state.degree_type;
        const fahrenheit = degree === 'c' ? tryConvert(temperature, toFahrenheit ) : temperature;
        const celsius = degree === 'f' ? tryConvert( temperature, toCelsius) : temperature; 
        return (
            <div>
                <TempartureInput 
                    temperature={fahrenheit} 
                    degree_type='f'
                    handleInputChange={this.handleChangeF}/>
                <TempartureInput 
                    temperature={celsius} 
                    degree_type='c'
                    handleInputChange={this.handleChangeC}/>

            </div>
        );
    }
    
}

export default Calculator