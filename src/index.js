import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './App'
import { store } from './store'
import { Provider } from 'react-redux'
// let heading = React.createElement('h1',null,'Heading in react')
// let para = React.createElement('p',null,'para')


// let container = React.createElement('div',null,heading,para)
let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(
    <div>
        <Provider store={store}>
        <RouterProvider router={appRouter}>
        <App />
        </RouterProvider>
        </Provider>


        </div>
 
)
