import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  handleSubmit = (event) =>{
    event.preventDefault();


    return fetch(`http://localhost/wordpress/wp-json/jwt-auth/v1/token?username=${this.nameInput.value}&password=${this.passwordInput.value}`, {
        method: 'POST',
    })
    .then(function(response){ 
      return response.json(); 
  })
  .then(function(data){ 
      console.log(data)
  })
      

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>


        <Login
            nameInputRef={(input) => this.nameInput = input} 
            passwordInputRef={(input) => this.passwordInput = input}
            handleSubmit={this.handleSubmit.bind(this)} 
          />
      </div>
    );
  }
}

export default App;
