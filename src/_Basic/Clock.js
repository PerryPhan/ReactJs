import React from 'react';

// Divide into interface and action
//- 1. Interface ( props ) { } 
// function Clock( props ){
//     return (
//         <div>
//             <h2>Time: {props.date.toLocaleTimeString()} </h2>
//         </div>
//     )
// }
//- 2. Action : each 1 second redraw Interface
// function tick( ){
//     ReactDOM.render( 
//         <Clock date={new Date()} />, 
//         document.getElementById('root') 
//     );
// }

//!Turn it into Class to use state and props 
//-  1. Class and render method 
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }
// - 2. Lifecycle
    // Set when DOM createElement
    componentDidMount() {
        this.timerID = setInterval(() => 
            this.tick()
        , 1000);
    }
    // Set when DOM removeElement
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // For ReactDOM.render()
    render(){
        return (
            <div>
                <h2> Time: {this.state.date.toLocaleTimeString()} </h2>
            </div>
        )
    }
// - 3. Ask where to change state ? 
    // Tick to setState after regain new Date()
    tick(){
        this.setState({
            date: new Date()
        })
    }
}

// n. Export to index
export default Clock;
