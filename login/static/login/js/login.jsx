import React, {Component} from 'react'
// import config from './config.json';
import 'login/scss/login'

class Login extends Component{
//{config.greetText}
   constructor() {
      super();
      // necessary to initialize state otherwise will be race competition between render and fetch
      this.state = {
         data: []
      }
   };

  //TIP: One of the benifit to use  arrow function '() => {}' instead of 'function() {}', arrow function is not binding with this
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments
  // componentDidMount() {
  //       console.log('>>>>>>>>');
  //   fetch('/products/list')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((json) => {
  //     console.log(json);
  //       this.setState({data: json});
  //     });
  //   console.log('>>>>>>>>');
  // };


  popoutLoginWindow() {
    alert('tt');
  }

  render() {
      return (
        <a onClick={this.popoutLoginWindow}>Log In</a>
      );
   }
}

export default Login
