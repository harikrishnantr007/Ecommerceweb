import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../Styles/ProductCard.scss'
import { IoMdAddCircle } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/slices/cartSlice';
import { toast,} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const ProductCard = ({item}) => {

  const dispatch=useDispatch()
  
  const addTocart=()=>{
    dispatch(addItem({
      id:item.id,
      productName:item.productName,
      price:item.price,
      imgUrl:item.imgUrl

    }
      

    ))
    toast.success("Product added successfully", {
      position: "top-right"
    });

  }
  return (
   
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
    <Card className='product-card ' style={{  }}>
    <Link className='product-link' to={`/shop/${item.id}`}> <Card.Img className='card-img' style={{ }} variant="top" src={item.imgUrl} /></Link>
    <Card.Body>
      <Card.Title><Link className='product-link' to={`/shop/${item.id}`}>{item.productName}</Link></Card.Title>
      <Card.Text className='product-subtxt'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Card.Text>
      <Card.Footer className='card-footer'>
  
      <Card.Text>{item.price}<FaRupeeSign/></Card.Text>
      <IoMdAddCircle className='add-btn' onClick={addTocart}/>
      
      </Card.Footer>
    </Card.Body>
   
  </Card>
 
  </div>
  )
}

export default ProductCard