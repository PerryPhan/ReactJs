import React from 'react'

class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state = {On: true}
        // To set `this` is stand for  Switch ( LOCAL ) , not document ( GLOBAL )
        this.handleClick = this.handleClick.bind(this)
    }
    // We will have one setState when button on click 
    componentDidUpdate(){
        if(!this.state.On) 
        {
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('body').style.color = 'white';
        }else{
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('body').style.color = 'black';
        }
    }
    handleClick(){
        this.setState( state => ({ On: !state.On }) )
        // console.log(document.querySelector('body').style)
    }
    //- so we must have listener
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.On ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}

// n. Export to index
export default Switch;
