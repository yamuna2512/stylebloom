import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { selectedProduct ,removeSelectedProduct} from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetails = () => {
    const Product=useSelector(state=>state.products.product)
    console.log(Product && Product);
    const {productId}=useParams()
    const dispatch=useDispatch()
    const fetchProductDetail= async()=>{
        const  productData=await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>console.log(err))
        dispatch(selectedProduct(productData.data))
    }

    useEffect(()=>{
        if(productId && productId !==''){
            fetchProductDetail()
        }
        return()=>{dispatch(removeSelectedProduct())}
    },[productId])
  return (
    <>
    
    <section className='Product_details'>
        <div>
          <img src={Product && Product.image} className='P_image'></img>
        </div>
        <div>
          <h1 className='P_title'>
            {Product && Product.title}
          </h1 >
          <h3 className='P_category'>{Product && Product.category}</h3>
          <h2 className='P_price'>
            $ {Product && Product.price}
          </h2>
          <h4 className='P_rating'><span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>({Product && Product.rating.count})</h4>
          <h5 className='P_desc'>
          {Product && Product.description}
          </h5>
          <section className='p_button'>
          <button>Buy Now</button>
          </section>
        </div>
    </section>
    
    </>
  )
}