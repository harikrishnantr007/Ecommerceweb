import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="some">
          
            <div>
              <h6>ABOUT</h6>
          <ul>
      <li>Contact Us</li>
      <li>About Us</li>
      <li>Careers</li>
    </ul>
    
   </div>
          <div>
          <h6>HELP</h6>
    <ul>
      <li>Payments</li>
      <li>Shipping</li>
      <li>Cancellation</li>
      <li>FAQ</li>
      <li>Report Infringement</li>
    </ul>
          </div>

          <div>
          <h6>CONSUMER POLICY</h6>
    <ul>
      <li>Cancellation & Returns</li>
      <li>Terms of use</li>
      <li>Security</li>
      <li>Privacy</li>
      <li>Compilance</li>
    </ul>
          </div>
          <div className="vertical-line"></div>
          <div>
          <h6>Mail Us:</h6>
    <ul>
      <p>Shopcart Internet Private Limited</p>
      <p>Buildings Alyssa , Begonia &Clove Embassy Tech Village,</p>
      <p>Outer Ring Road, Devarabeesanahalli Village,</p>
      <p>Bengaluru,560103</p>
      <p>Karnataka,India</p>
    </ul>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer