import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';
import Banner from '../assets/images/banner.jpg' ;

export const ProductListing = () => {
    const products=useSelector(state=>state.allProducts.product)
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchData=async()=>{
            const productData=await axios.get('https://fakestoreapi.com/products').catch(err=>console.log(err))
            dispatch(setProducts(productData.data))
        }
        fetchData()
    },[])
  return (

     <section style={{ paddingTop: '80px' }}>
      {/* Banner Section */}
      <div style={{ marginBottom: '40px' }}>
        <img
          src={Banner}
          alt="Fashion Sale"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </div>

    {/* <section style={{paddingTop:'100px'}}> */}
      <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </section>
  )
}

