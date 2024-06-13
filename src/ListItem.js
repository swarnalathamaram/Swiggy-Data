import React from 'react'
import {useDispatch} from 'react-redux'
import {addItem, increaseCount} from './store'
function ListItem(props) {
    let dispatch = useDispatch()
      let imageUrl='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/'
  
    return (
      <div>
          <div className='d-flex justify-content-between'>
              <p>{props.item.length}</p>
              <span onClick={()=>{
                props.handleData()
              }}>↘️</span>
          </div>
          {props.showItem && props.item.map(function(ele){
       
       return <div>
       
        <div className='d-flex justify-content-between'>
       
         <div className='p-2'>
           <h6>{ele.card.info.name}</h6>
           <p>{ele.card.info.price/100}</p>
           <p>{ele.card.info.ratings.aggregatedRating.rating}</p>
           <p>{ele.card.info.description}</p>
         </div>
         <div>
         {ele.card.info.imageId && <img src={`${imageUrl}${ele.card.info.imageId}`}height='100px' width='100px' className='rounded'/> }
         <button onClick={()=>{
dispatch(increaseCount())
dispatch(addItem(ele))
         }}>Add</button>
         </div>
         </div>
   
         </div>
         })}
    </div>
   
     
  )
}


export default ListItem
  