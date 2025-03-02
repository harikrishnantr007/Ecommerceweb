import React, { useEffect, useRef, useState } from 'react'
import CommonSection from '../Ui/CommonSection'
import products from '../Assets/data/products'
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom'
import { FaStarHalfAlt } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import ProductList from '../Ui/ProductList';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/slices/cartSlice';
import { toast,} from 'react-toastify';

import '../Styles/ProductDetails.scss'


const ProductDetails = () => {

const[tab,setTab]=useState('desc')

const[rating,SetRating]=useState(null)

  const {id}=useParams();
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
const dispatch=useDispatch();



  const product=products.find(item=> item.id===id)

  const {productName,imgUrl,price,reviews,avgRating,shortDesc,description,category}=product;

  const relatedProducts=products.filter((item)=>item.category===category)

  const submitHandler=(e)=>{
    e.preventDefault()

    const reviewUsername=reviewUser.current.value;
    const reviewUsermsg=reviewMsg.current.value;
    
    const revieObj={
      Username:reviewUsername,
      text:reviewUsermsg,
      rating
    }
console.log(revieObj)
  }

  const addToCart=()=>{
    dispatch(addItem({
      id,
      imgUrl,
      productName,
      price,
    }))

    toast.success("Product added successfully", {
      position: "top-right",
    });
  }
  useEffect(()=>{
window.scroll(0,0)
  },[product])
  return (
    <div>
<CommonSection productName={productName}/>
<section style={{padding:'0px' ,backgroundColor:"white"}}>
    <div className="container">
    <div className="row" style={{display:'flex', alignItems:'center'}}>
      <div className='col-lg-6'>
    <img className='prodictde_img' src={imgUrl} alt="" />
        </div>
        <div className='col-lg-6'>
          <div className="product_details">
            <h2>{productName}</h2>
            <div className="product_rating">
             <div>
             <FaStar className='star_icon'/>
              <FaStar  className='star_icon'/>
              <FaStar  className='star_icon'/>
              <FaStar  className='star_icon'/>
              <FaStarHalfAlt  className='star_icon'/>
              </div>
              
              <span>({avgRating} Ratings)</span>
            </div>
            <p>{price}<MdCurrencyRupee/></p>
            <p>{shortDesc}</p>
            <button className='addCartbtn' onClick={addToCart}>Add To Cart</button>
          </div>
          </div>
        </div>
        </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
            <div className='col-lg-12'>
              <div className="tab_wrapper">
                <h6 className={`${tab==='desc'?'active_tab':''}`}
                onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab==='rev'?'active_tab':''}`}
                 onClick={()=>setTab('rev')}>Reviews({reviews.length})</h6>
              </div>
              {tab==='desc'?<div className="tab_content">
                <p>{description}</p>
              </div>:<div className="product_reviews">
                <div className="review_wrapper">
                  <ul>
                    {reviews?.map((review)=>(
                      <li><span>{review.rating}(Rating)</span><p>{review.text}</p></li>
                    )
                      
                    )}
                  </ul>
                  <div className="review_from">
                    <h4>Leave your experience </h4>
                    <form onSubmit={submitHandler}>
                      <div className="form_group">
                        <input 
                        type="text" 
                        placeholder='enter name' 
                        ref={reviewUser} />
                      </div>
                      <div className="form_group" style={{display:"flex" ,alignItems:"center",gap:'5px'}}>
                        <span onClick={()=>SetRating(1)}>1<FaStar/></span>
                        <span onClick={()=>SetRating(2)}>2<FaStar/></span>
                        <span onClick={()=>SetRating(3)}>3<FaStar/></span>
                        <span onClick={()=>SetRating(4)}>4<FaStar/></span>
                        <span onClick={()=>SetRating(5)}>5<FaStar/></span>

                        </div>
                        <div className="form_group">
                          <textarea 
                          rows={4} 
                          placeholder='Review message'
                          ref={reviewMsg} />
                        </div>
                        <button type='submit' className='addCartbtn'>Submit</button>

                    </form>
                  </div>
                </div>
              </div>}
              
            
              </div>
              <div className="col-lg-12" style={{marginTop:'30px'}}>
                <h2 className="related_products">You might also like </h2>
                <ProductList data={relatedProducts}/>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ProductDetails