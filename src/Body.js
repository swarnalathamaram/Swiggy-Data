import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom'
import useGetData from './useGetData'
import {HOC} from './Card'


function Body(props) {
 let [filteredItems,setFilteredItems] = useState([])
 let [searchItem,setSearchItem] = useState('')
  let HOCCard = HOC(Card)
    let jsonData = useGetData('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      console.log(jsonData)
      let result = jsonData?.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants 
      useEffect(()=>{
        setFilteredItems(result)
    },[jsonData])
    return (
        <div>
         <input type='text' onChange={(event)=>{
          setSearchItem(event.target.value)
         }} className='border-pink-500 border-1 m-1'/>
         <button onClick={()=>{
         let filterdItem =  result.filter(function(ele){
            return ele.info.name.toUpperCase().includes(searchItem.toUpperCase())
          })
          setFilteredItems(filterdItem)
         }}>filteredData</button>
           <div className='d-flex flex-wrap'>
         
          {filteredItems?.map(function(ele){
            return <div className='p-3'>
              <Link to={`/restaurants/${ele.info.id}`}>{ele.info.veg ? <HOCCard item={ele}/>:<Card item={ele}/>}</Link>
              </div>
          })}
      </div>
      </div>
)
}
export default Body
          