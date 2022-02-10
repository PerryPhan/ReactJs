import React from 'react';

export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="container" ref={this.props.containerRef}>
                <div className="header">
                    <h1>Login</h1>
                </div>
                <div className="content">
                    <form action="#" className="form">
                        <div className="form-group">
                            <label htmlFor="Username"> Username </label>
                            <input type="text" name="username" value={this.props.username} onChange={(e) => this.props.setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password"> Password </label>
                            <input type="password" name="password" value={this.props.password} onChange={(e) => this.props.setPassword(e.target.value)} />    
                            <div className="checkbox">
                                <input type="checkbox" name="save_password" id="passwordsaving" value={this.props.savingPassword} onChange={(e) => this.props.toggleSavingPassword()}/> 
                                <label> Agree to remember the password </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn signin" >SIGN IN</button>
                            <button type="button" className="btn signup" onClick={(e) => this.props.toggleSignup(e)} >No account</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}