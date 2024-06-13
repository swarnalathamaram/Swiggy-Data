import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


function Header(){
    let data = useSelector((state)=>{
        console.log(state)
return (state.cart.cartCount)
    })
    console.log(data)
    return (
        <div className="d-flex justify-content-between">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREirGFDJfQK__71D8dXX0ocP0evnWczvOkUkRlrHEdg&s' height='40px' width='50px'/>
        <ul className="d-flex list">
            <li className="p-4"><Link to='/Home'>Home</Link></li>
            <li className="p-4"><Link to='/offers'>Offers</Link></li>
            <li className="p-4"><Link to='/help'>Help</Link></li>
            <span>{data}</span>
            <li className="p-4"><Link to='/cart'>Cart</Link></li>
        </ul>
        </div>
    )
}
export default Header
