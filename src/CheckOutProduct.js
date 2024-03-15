import React from 'react'
import { useStateValue } from './StateProvider';
import './CheckOutProduct.css'


function CheckOutProduct({id,title,price,rating,hideButton,image}) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div className='checkOutProduct'>
        <img className='checkOutProduct_image' src={image}/>
        <div className='checkOutProduct_info' >

            <p className='checkOutProduct_title'>{title}</p>
            <p className='checkOutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton&&(
                <button onClick={removeFromBasket}>Remove From Basket</button>
            )}
        </div>
      
    </div>
  )
}

export default CheckOutProduct
