import React, { Component } from 'react';
import './../App.css';

class Login extends Component {


  render() {
    return (
      <div className="Login">
        <div className="center-outer full-width">
            <div className="center-inner">
                <h1>Login</h1>
                <form onSubmit={(event) => { this.props.handleSubmit(event) }} ref={(form) => { this.loginForm = form }}>
                    <div className="group">      
                        <input type="text" aria-label="Name" ref={this.props.nameInputRef} autoComplete="off" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Name</label>
                    </div>
                    <div className="group">      
                        <input type="password" aria-label="Password" ref={this.props.passwordInputRef} autoComplete="off" required/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-submit">Go</button>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
