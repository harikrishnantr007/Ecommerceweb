import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import "./Header.scss"
const Header = () => {
  const totalquantity=useSelector(state=> state.cart.totalQuantity)
const navigate=useNavigate();

const hadnlenav=()=>{
  navigate('/shop')
}
  return (
    <>
    <header className='header' >
      <div className="container">
        <div className="row">
          <div className="nav_wrapper">
          <Link className='nav_home' to='/'>
            <div className="logo">
              <h3>ShopCart</h3>
              <HiShoppingCart className='logocart'/>
            </div>
            </Link>

            
              
            <div className="nav-search">
                
              <CiSearch className='seacr-icon'/>
              
                <input 
                type="text"
                placeholder='Search for Products, Brands and More' onClick={hadnlenav}/>
              
            </div>
            <div className="nav_icons">
              
              <div className='cart_icon'><Link className='nav_Cart_icon' to={"Cart"}><Badge badgeContent={totalquantity} color="primary"><IoCartOutline/></Badge></Link></div>
              
              <span className='profile_icon'><Link className='nav_Profile_icon' to={'Login'}><CgProfile/></Link></span>

            </div>
            <div className="mobile-menu">
            <span ><IoIosMenu/></span>

            </div>
          </div>
          <div className="nav-search small_screen">
                
                <CiSearch className='seacr-icon'/>
                
                  <input 
                  type="text"
                  placeholder='Search for Products, Brands and More' onClick={hadnlenav}/>
                
              </div>
        </div>
      </div>
    </header>
    <Nav/>
    </>
  )
}

export default Header