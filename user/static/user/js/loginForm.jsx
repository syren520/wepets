import React, {Component} from 'react'
import 'login/scss/login'
import $ from 'jquery'
//import DjangoCSRFToken from 'django-react-csrftoken'
import getCookie from 'public_static/js/util/cookieManager'

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
    const data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    const csrf = getCookie('csrftoken');
    fetch('/user/login',
          {
            method: "POST",
            body: data,
            credentials: 'include',
            headers: {
              'X-CSRFToken': csrf
            }
          }
    )
      .then((response) => {
        if(response.ok) {
          console.log('success');
        } else {
          console.log('fail');
        }
      });
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
