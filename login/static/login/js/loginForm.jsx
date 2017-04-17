import React, {Component} from 'react'
import 'login/scss/login'
import $ from 'jquery'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username:'', password:''};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleCancel(event) {
    event.preventDefault();
    $('#login-form').addClass('hidden');
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState(
       {[name]: value}
    );
  }

  handleSubmit(event) {

    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
      <form className="modal-content" onSubmit={this.handleSubmit}>
        <div className="imgcontainer">
            <span onClick={this.handleCancel} className="close"
                  title="Close Modal">&times;</span>
        </div>
        <div className="container">
          <label>
            <label><b>Username</b></label>
            <input name="username" type="text" value={this.state.username} placeholder="Enter Username"
                   onChange={this.handleInputChange}/>
          </label>
          <label>
            <label><b>Password</b></label>
            <input name="password" type="password" value={this.state.password} placeholder="Enter Password"
                   onChange={this.handleInputChange}/>
          </label>
          <input className="btn" type="submit" value="Submit"/>
        </div>
      </form>
    );
  }
}

export default LoginForm
