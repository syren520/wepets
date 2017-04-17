import React from 'react';
import {render} from 'react-dom';
import Login from 'login/js/login';
import LoginForm from 'login/js/loginForm'
import Greeter from 'products/js/products_list';
import 'public_static/js/vendor/foundation'
import 'public_static/js/vendor/what-input'
import 'public_static/css/vendor/foundation'
import 'public_static/scss/external_template'

var path = require("path");
$(document).foundation();

console.log("__dirname = %s", path.resolve(__dirname));

render(<Login />, document.getElementById('login-btn'));

render(<Greeter />, document.getElementById('section-1-products-list'));

render(<LoginForm />, document.getElementById('login-form'));
