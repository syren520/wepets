import React, {Component} from 'react'
// import config from './config.json';
import 'products/scss/productList'

class Greeter extends Component{
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
  componentDidMount() {
        console.log('>>>>>>>>');
    fetch('/products/list')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
      console.log(json);
        this.setState({data: json});
      });
    console.log('>>>>>>>>');
  };




  render() {
      return (
        <div className="row">
          <div className="large-12 columns">
            <div className="custom-tab text-center mb-40">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>

            <div className="products-content row">
              {this.state.data.map(function (product, i) {
                console.log(product.description)
                {/*For some reason, when you return multi line dom, if you don't use bracket to include all your return, it won't work*/}
                return (
                  //Each child in an array or iterator should have a unique "key" prop.
                  <div className="large-4 medium-4 columns end" key={i}>
                      <a href="#">{product.name}</a>
                      <p className="product-content">{product.description}</p>
                        <img src={product.images[Math.floor(Math.random() * 3)]}></img>
                          {/*product.images.map(function (image, i) {*/}
                            {/*if (i == 0) {*/}
                              {/*return (<img src={image}></img>)*/}
                            {/*}*/}
                          {/*})*/}
                  </div>)
              })}
            </div>
          </div>
        </div>
      );
   }
}

export default Greeter
