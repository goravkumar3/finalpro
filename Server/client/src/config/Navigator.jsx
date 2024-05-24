import {Routes,Route} from 'react-router-dom'
import {Home,About,Products,Cart,PaymentForm,Login,Register} from '../pages'
const Navigator = () => {
  return (
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />   
        <Route  path="/Products" element={<Products/>} />   
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/PaymentForm" element={<PaymentForm/>} />   
        <Route  path="/login" element={<Login/>} />   
        <Route  path="/register" element={<Register/>} />   
 </Routes>
  )
}

export default Navigator