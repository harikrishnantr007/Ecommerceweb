import React, { useEffect, useState } from 'react'
import CommonSection from '../Ui/CommonSection'
import '../Styles/Shop.scss'
import { CiSearch } from "react-icons/ci";
import Card from 'react-bootstrap/Card';
import products from '../Assets/data/products'
import { IoMdAddCircle } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/slices/cartSlice';
import { toast,} from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
const Shop = () => {

  const[productsData,setProductsData]=useState(products)
  const location = useLocation();
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const category = query.get('category');

    if (category === 'all' || !category) {
      setProductsData(products);
    } else {
      const filteredProducts = products.filter(item => item.category === category);
      setProductsData(filteredProducts);
    }
  }, [location.search]);
  const handleFilter=(e)=>
  {
    const filtervalue=e.target.value;
    if(filtervalue==='sofa')
    {
      const filteredProducts=products.filter((item)=>item.subcategory==="sofa")
      setProductsData(filteredProducts)
    }
    if(filtervalue==='mobile')
      {
        const filteredProducts=products.filter((item)=>item.subcategory==="mobile")
        setProductsData(filteredProducts)
      }
      if(filtervalue==='chair')
        {
          const filteredProducts=products.filter((item)=>item.subcategory==="chair")
          setProductsData(filteredProducts)
        }
        if(filtervalue==='watch')
          {
            const filteredProducts=products.filter((item)=>item.subcategory==="watch")
            setProductsData(filteredProducts)
          }
          if(filtervalue==='wireless')
            {
              const filteredProducts=products.filter((item)=>item.subcategory==="wireless")
              setProductsData(filteredProducts)
            }
    
  }
  const handleSearch=(e)=>{
    const searchterm=e.target.value;
    const serachedProduct=products.filter(item=>item.productName.toLocaleLowerCase().includes(searchterm.toLocaleLowerCase()))
    setProductsData(serachedProduct)
  }
  const dispatch=useDispatch();
  
  const addTocart = (pro) => {
    dispatch(
      addItem({
        id: pro.id,
        productName: pro.productName,
        price: pro.price,
        imgUrl: pro.imgUrl,
      })
    );
    toast.success("Product added successfully", {
      position: "top-right",
    });
  };
  return (
    <div><CommonSection productName={'Products'}/>
    <section>
    <div className="container">
    <div className="row">
      <div className='col-6 col-lg-3 col-md-6'>
        <div className="filter_widget">
          <select onChange={handleFilter}>
          <option >Filter By Category</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="watch">Watch</option>
            <option value="wireless">Wireless</option>
          </select>
        </div>
      </div>
      <div className=' col-6 col-lg-3 col-md-6 text-end'>
        <div className="filter_widget">
          <select>
          <option >Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
           
          </select>
        </div>
      </div>
      <div className='col-lg-6 col-md-12'>
        
         <div className="serach_box">
          <input type="text" placeholder='Search...' onChange={handleSearch} />
          <CiSearch className='filter_serach'/>

         </div>
        
      </div>
    </div>
    </div>
    </section>
    <section>
    <div className="container">
    <div className="row">
    
        {productsData.length===0? <h1 className='noproduct'>No Products Are Found ..!</h1> :productsData.map((item )=>(
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 ">
      <Card className='product-card '>
    <Card.Img className='card-img' variant="top"  style={{  height:'14rem' ,backgroundSize:'cover' ,width:'100%',objectPosition: "center"}}  src={item.imgUrl} />
    <Card.Body>
      <Card.Title><Link className='product-link' to={`/shop/${item.id}`}>{item.productName}</Link></Card.Title>
      <Card.Text className='product-subtxt'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Card.Text>
      <Card.Footer className='card-footer'>
  
      <Card.Text>{item.price}<FaRupeeSign/></Card.Text>
      <IoMdAddCircle className='add-btn' onClick={()=>addTocart(item)} />
      
      </Card.Footer>
    </Card.Body>
   
  </Card>
      </div>))} 
      </div>
      </div>
    </section>
    </div>
  )
}

export default Shop