import React from 'react'
import CommonSection from '../Ui/CommonSection'
import shopping_cart from '../Assets/images/shopping_cart.png'
import { MdCurrencyRupee } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../Redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/Cart.scss'
const Cart = () => {

 const navigate=useNavigate();
  const cartitems=useSelector(state => state.cart.cartItems)
const totalamount=useSelector(state =>state.cart.totalAmont)
const totalquantity=useSelector(state =>state.cart.totalQuantity)

  console.log('the cart items ',cartitems)
const hadnlenav=()=>{
  navigate('/Checkout')
}

  return (
    <div>
      <CommonSection productName={"Shopping Cart"}/>
      <div className="container">
        
    <div className="row" style={{'marginTop':'20px'}} >
    {(cartitems.length===0)?(<div className='emptycart'><img src={shopping_cart} alt="" /><p>Your Cart id Empty</p></div>
      ):(
      <div className='col-lg-8'>
        { cartitems.map((item,index)=>(
        <Cartitems item={item} key={index}/>))}
     
   </div>
  )}
      {cartitems.length >0 &&
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
        <button onClick={hadnlenav}>Place Order</button>
        </div>
      </div>
      }

    </div>

    </div>
    </div>
  )
}
const Cartitems=({item})=>{
  const dispatch=useDispatch();
  const deleteProduct=(id)=>{
    dispatch(deleteItem(id))
  }
  const totalquantity=useSelector(state=> state.cart.totalQuantity)

return(
  <div className="cart_items"  >
  <div className="item_image">
    <img src={item.imgUrl} alt="" />
  </div>
  <div className="item_detils">
    <h6>{item.productName}</h6>
    <p><MdCurrencyRupee/>{item.price}</p>
    <p>Quantity : {totalquantity}</p>
    <button onClick={()=>deleteProduct(item.id)}>Remove</button>
    
  </div>
</div>
)
}

export default Cart