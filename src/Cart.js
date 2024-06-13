import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeItem } from './store';

function Cart() {
  let data=useSelector((state)=>{
    return (state.cart.cartData)
  })
  let dispatch=useDispatch()
  let itemUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/f1_lossy,f_auto,q_auto,w_660/'
  console.log(data)
  return (
    <div>
       {data.map(function(ele){
        return <div>
        <div className='d-flex justify-content-between'>
            <div className='p-2'>
              <h6>{ele.card.info.name}</h6>
              <p>{ele.card.info.price/100}</p>
              <p>⭐{ele.card.info.ratings.aggregatedRating.rating}</p>
              <p>{ele.card.info.description}</p>
            </div>
            <div>
            </div>
            {ele.card.info.imageId && <img src={`${itemUrl}${ele.card.info.imageId}`} height='100px' width='100px' className='rounded'/>}
            
            <button onClick={()=>{
        dispatch(removeItem(ele.card.info.id))
      }} className='bg-red-800 text-white p-1'>increase</button>
            </div> 
          </div>
       })}
      </div>
  )
}

export default Cart;
          