import React from 'react'
import User from './User'


function Card(props) {
    let url ='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'

    return (
        <div>
           <img src={`${url}${props.item.info.cloudinaryImageId}`} height='100px' width='160px' className='rounded'/>
                <h6>{props.item.info.name}</h6>
                <span >{props.item.info.avgRating}</span>
                <span className='p-2'>{props.item.info.sla.slaString}</span>
    <p>{props.item.info.areaName}</p>
        </div>
      )
    }
    export default Card
    export function HOC(Card){
      return function(props){
        return <div>
         <Card {...props}/>
        <label className='bg-success text-white'>Veg</label>
        </div>
      }
    }