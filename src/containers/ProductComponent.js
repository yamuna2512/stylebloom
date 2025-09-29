import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);

  return (
   <>
   <section id="products">
   {
      products && products.map((product)=>{
        const{id,title,price,category,image}=product
        return(
            <>
             <div className="" key={id}>
                <Link to={`/product/${id}`}>
          <div className="product_card">
            <div className="">
              <div className="card_image">
                <img src={image}></img>
              </div>
              <div className="details">
                <div className="heading">{title.substring(0,23)}</div>
                <div className="price">${price}</div>
                <div className="category">{category}</div>
              </div>
            </div>
          </div>
          </Link>
        </div>
            </>
        )
      })
    }
   </section>
   </>
  )
};