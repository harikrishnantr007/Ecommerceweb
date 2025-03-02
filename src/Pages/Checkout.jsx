import React from 'react'
import CommonSection from '../Ui/CommonSection'
import { Form, FormGroup } from 'react-bootstrap'
import { MdCurrencyRupee } from "react-icons/md";
import {  useSelector } from 'react-redux';
import '../Styles/Chechout.scss'
const Checkout = () => {
  
  const totalamount=useSelector(state =>state.cart.totalAmont)
  const totalquantity=useSelector(state =>state.cart.totalQuantity)
  return (
    <div>
      <CommonSection productName={"Checkout"}/>
    <div className="container">
      
  <div className="row" >
  <div className='col-lg-8'>
    <h6 className='checkout_title'>Billing Information</h6>
    <Form>
      <FormGroup className='form_group'>
        <input type="text" placeholder='enter your name' />
      </FormGroup >
      <FormGroup className='form_group'>
        <input type="email" placeholder='enter your email' />
      </FormGroup>
      <FormGroup className='form_group'>
        <input type="text" placeholder='streetAdress' />
      </FormGroup>
      <FormGroup className='form_group'>
        <input type="text" placeholder='city' />
      </FormGroup >
      <FormGroup className='form_group'>
        <input type="number" placeholder='postalcode' />
      </FormGroup>
      
    </Form>
    </div>
     <div className='col-lg-4'> 
          <div className="cart_price">
              <h5>PRICE DETAILS</h5>
              <hr />
              <div className="price">
                <div><p>Price ({totalquantity} items)</p></div>
                <div><MdCurrencyRupee/>{totalamount}</div>
              
              </div>
              <div className="price">
                <div><p>Discount </p></div>
                <div><MdCurrencyRupee/>0</div>
              
              </div>
              <div className="price">
                <div><p>Delivery Fee </p></div>
                <div><MdCurrencyRupee/>0</div>
              
              </div>
              <hr />
              <div className="price">
                <div> <h6>Total Amount </h6></div>
                
                <div><MdCurrencyRupee/>{totalamount}</div>
              
              </div>
            <button >Place Order</button>
            </div>
          </div>
  </div>
  </div>
  </div>
  )
}

export default Checkout