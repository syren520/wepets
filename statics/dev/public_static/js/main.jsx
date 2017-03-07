import React from 'react';
import {render} from 'react-dom';
import Greeter from 'products/js/Greeter.jsx';
import 'public_static/js/vendor/foundation'
import 'public_static/js/vendor/what-input'
import 'public_static/css/vendor/foundation'
import 'public_static/scss/external_template'

var path = require("path");
$(document).foundation();

console.log("__dirname = %s", path.resolve(__dirname));
render(<Greeter />, document.getElementById('root'));
