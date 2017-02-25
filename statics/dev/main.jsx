import React from 'react';
import {render} from 'react-dom';
import Greeter from 'products/js/Greeter.jsx';
import './fei.css';

var path = require("path");
console.log("__dirname = %s", path.resolve(__dirname));
render(<Greeter />, document.getElementById('root'));
