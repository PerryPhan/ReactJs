import React from 'react';

export class Register extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="container" ref={this.props.containerRef}>
                <div className="header">
                    <h1>Register</h1>
                </div>
                <div className="content">
                    <form action="#" className="form">
                        <div className="form-group">
                            <label htmlFor="Username"> Username </label>
                            <input type="text" name="username"  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password"> Password </label>
                            <input type="password" name="password" />    
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password"> Retype password </label>
                            <input type="password" name="repassword" />    
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn signin" >SIGN UP</button>
                            <button type="button" className="btn signup" onClick={(e) => this.props.toggleSignup(e)}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}