import React from 'react'

const Product = ({item})=>{
    return(
        <div className='product-container'>
            <img src={item.image} width="200px"></img>
            <p>{item.title}</p>
            <p>Rs.{item.price}</p>
            {/* <p>{item.description}</p> */}
            <p>Category:{item.category}</p>
            <span>⭐{item.rating.rate}</span>
            <span>{item.rating.count}</span>
            <button>Add To Cart</button>
        </div>
    )
}
export default Product;