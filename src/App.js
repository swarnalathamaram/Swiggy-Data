import Header from './Header'
import React from 'react'
// import Body from './Body'
import './App.css'
import { createBrowserRouter,Outlet } from 'react-router-dom'
// import Offers from './Offers'
import Help from './Help'
import Cart from './Cart'
import Menu from './Menu'

import { createContext } from 'react'
import { Suspense } from 'react'
import Counter from './Counter'
let Body = React.lazy(()=>import('./Body'))
let Offers = React.lazy(()=>import('./Offers'))


export let context = createContext()
console.log(context)
export  function App(){
   
 
    return (
    <div>
    <Header />
     <Outlet/>
    </div>
    )
  }
  let name = 'Likhitha'
  export let appRouter = createBrowserRouter(
      [
      {
          path:'/',
          element:<App />,
          children:[
              {
                  path:'/',
                  element:<context.Provider value={name}>
                       <Suspense fallback='Loading...'><Body /></Suspense>
                       </context.Provider> 
              },
              {
                  path:'/offers',
                  element:<Suspense fallback='Loading...'><Counter /></Suspense>
              },
              {
                  path:'/help',
                  element:<Help />
              },
              {
                path:'/cart',
                element:<Cart />
              },
              {
                  path:'/restaurants/:restId',
                  element:<Menu />
              }
          ]
      },
     
  ]
  )
