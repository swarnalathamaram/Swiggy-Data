import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import ListItem from './ListItem'
function Menu() {
  let [Object,setMenu]=useState([])
  let [showIndex, setShowIndex] = useState(null)
  let id=useParams()
  let uniqueId=(id.restId)
  let url=`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=${uniqueId}`
 
  async function getData(){
    let data=await fetch(url)
    let jsonData=await data.json()
    console.log(jsonData)


    let result=jsonData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(function(ele){
      return ele.card.card['@type']=== 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })
    console.log(result)
    let ItemCardsData=result?.map(function(ele){
      return ele.card.card.itemCards
    })
     console.log(ItemCardsData)
    setMenu(ItemCardsData)
     
}
useEffect(()=>{
  getData()
},[])

return (
  <div>
    {Object?.map(function(ele,index){
      let handleData = ()=>{
        index === showIndex ? setShowIndex(null):setShowIndex(index)
      }
      console.log(ele)
      return <ListItem item={ele} showItem={index === showIndex? true:false } handleData={handleData}/>
    })}
    </div>
)
}


export default Menu
