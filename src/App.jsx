import React from 'react'
import './Global.css'
import { Header } from './containers/Header'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import { ProductListing } from './containers/ProductListing'
import { ProductDetails } from './containers/ProductDetails'
import './index.css'
export const App = () => {
  return (
    
     <Router>
      <Header/>
      <Routes>
         <Route path='/' element={<ProductListing/>}/>
         <Route path='/product/:productId' element={<ProductDetails/>}/>
         <Route>404 Not Found</Route>
      </Routes>
     </Router>
  )
}
 export default App