import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponent } from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productAction';

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
    <section style={{paddingTop:'100px'}}>
      <div className='ui grid container'>
        <ProductComponent/>
    </div>
    </section>
  )
}

