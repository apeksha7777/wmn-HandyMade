import React, { Component } from "react";
import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";
import web3 from 'web3'


const abi = require('./abi')
console.log('check abi', abi)
export default class CartTotals extends Component {
  pay = () => {
     const {
      cartSubTotal,
      cartTotal,
    } = this.props.value;
    /*const currentProvider = window.web3.currentProvider
    //TODO: create web3 object
    const web3Obj = new web3(currentProvider) 
    //create instance of contract {paramsL abi and contract address
    var abc = new web3Obj.eth.Contract(abi, '0xf95948f506b40691efcd655d953c26be768465ab')

    // call contract method
      abc.methods.buyerAccount().call().then((res)=>{
        console.log('check abi', res)
      })
      abc.methods.sellerAccount().call().then((res)=>{
        console.log('check res 1', res)

      })
      abc.methods.sell(cartTotal).call().then((res)=>{
        console.log('check res 2', res)
      })
    
    console.log('pay amount', cartTotal)
    */
  }
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      cart,
      clearCart
    } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;
    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    clear cart
                  </button>
                </Link>
                <h5>
                  <span className="text-title"> subtotal :</span>{" "}
                  <strong> {cartSubTotal} eth </strong>
                </h5>
                <h5>
                  <span className="text-title"> tax :</span>{" "}
                  <strong>{cartTax} eth </strong>
                </h5>
                <h5>
                  <span className="text-title"> total : </span>
                  <strong> {cartTotal} eth </strong>
                </h5>
                 <button
                    className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type="button"
                    onClick={this.pay}
                  >
                    Pay
                  </button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
