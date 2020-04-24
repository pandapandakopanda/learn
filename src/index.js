import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { RouterProvider } from 'react-router5'
import creatRouter from './creat-router'


const router = creatRouter()

router.start(()=>{
    ReactDOM.render(
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    , document.querySelector('#root'))
})