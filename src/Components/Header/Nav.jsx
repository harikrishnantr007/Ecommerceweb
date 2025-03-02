import React from 'react'
import { Link } from 'react-router-dom';
import kitchen from "../../Assets/images/kitchen.webp";
import tvandappli from '../../Assets/images/tvandappli.webp'
import electronics from '../../Assets/images/electronics.webp'
import furniture from '../../Assets/images/furniture.webp'
import fashion from '../../Assets/images/fashion1.webp'
import { useRef,useEffect } from 'react';
const Nav = () => {
  const headerRef=useRef(null)

  const stickyheaderffun=()=>{
    if (window.scrollY > 80) {
      headerRef.current.classList.add('stick_header');
    } else {
      headerRef.current.classList.remove('stick_header');
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll', stickyheaderffun);

    return()=> window.removeEventListener("scroll",stickyheaderffun)
  },[])
  return (
    <nav ref={headerRef}>
      <div className="container">
        <ul>
        <li><Link  to="shop" className='nav_Links'><img src={kitchen} alt="" /><h5>All categories</h5></Link></li>
          <li><Link className='nav_Links' to="/shop?category=kitchen"><img src={kitchen} alt="" /><h5>Kitchen</h5></Link></li>
          <li><Link className='nav_Links' to="/shop?category=appliances"><img src={tvandappli} alt="" /><h5>TVs&Appliances</h5></Link></li>
          <li><Link className='nav_Links' to="/shop?category=Fashion"><img src={fashion} alt="" /><h5>Fashion</h5></Link></li>
          <li><Link className='nav_Links' to="/shop?category=Electronics"><img src={electronics} alt="" /><h5>Electronics</h5></Link></li>
          <li><Link className='nav_Links' to="/shop?category=furniture"><img src={furniture} alt="" /><h5>Furniture</h5></Link></li>
         
        </ul>
      </div>
    </nav>
  )
}

export default Nav