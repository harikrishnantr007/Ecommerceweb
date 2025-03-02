import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

import aa from '../Assets/images/aa.jpg'
import Services from '../Services/Services';
import '../Styles/Home.scss'
import ProductList from '../Ui/ProductList';
import products from '../Assets/data/products'
import samsungtv from '../Assets/images/samsungtv.png'
import { FaRupeeSign } from "react-icons/fa";
import banner1 from '../Assets/images/banner1.webp'
import banner2 from '../Assets/images/banner2.png'
const Home = () => {

  const[esprod,setEsprod]=useState([])
  const[furnprod,setFurprod]=useState([])
  const[fashionprod,setFashionprod]=useState([])
 
 
  useEffect(()=>{
    const elecronicsproducts=products.filter(item=>item.category==="Electronics")
    const furnitureproducts=products.filter(item=>item.category==="furniture")
    const fashionproducts=products.filter(item=>item.category==="Fashion")
    setFurprod(furnitureproducts)
setEsprod(elecronicsproducts)
setFashionprod(fashionproducts)
  },[])

 
  return (
    <div >
    <Carousel>
    <Carousel.Item>
      <img src={banner1} alt="" />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={banner2} alt="" />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src={aa} alt="" />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <Services/>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h3 className='section-title'>Electronics Products</h3>
        </div>
        <ProductList data={esprod} />
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h3 className='section-title'>Furniture Products</h3>
        </div>
        <ProductList data={furnprod}/>
      </div>
    </div>
  </section>
  <section className='Ad'>
  <div className="banner">
    <div>
      <img src={samsungtv} alt="" />
    </div>
    <div>
      <h2>Big screen Bigger Discounts</h2>
      <h6>SAMSUNG Crystal Vision 4K iSmart</h6>
      <p>Ultra HD (4K) LED Smart Tizen TV with IOT Sensors for Light & Camera </p>
      <h4>From <FaRupeeSign/>28,999</h4>
    </div>
  </div>
  </section>
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h3 className='section-title'>Fashion Products</h3>
        </div>
        <ProductList data={fashionprod}/>
      </div>
    </div>
    
  </section>
  </div>
  )
}

export default Home