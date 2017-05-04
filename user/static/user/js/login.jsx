import React, {Component} from 'react'
import 'login/scss/login'
import $ from 'jquery';

class Login extends Component {
  constructor(props) {
    super(props);
    // save the popup state
    this.state = {
        visible: false, // initially set it to be hidden
        value: '' // and its content to be empty
    };
  }

  popup() {
    document.getElementById('login-form');
    $('#login-form').removeClass('hidden');
  }

  render() {
    return (
      <div>
        <a onClick={() => this.popup()}>Log In</a>
      </div>
    );
  }
}

export default Login
