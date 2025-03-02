import React from 'react'
import ProductCard from './ProductCard'
import Carousel from 'react-multi-carousel';
import '../Styles/ProductCard.scss'
import 'react-multi-carousel/lib/styles.css';
const ProductList = ({data}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    
    <Carousel responsive={responsive} >
   {data.map((item ,index)=>(
 <ProductCard item={item} key={index}/>
    ))} 
  
</Carousel>;
  
       
        
    </>
  )
}

export default ProductList