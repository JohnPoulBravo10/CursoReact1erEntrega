import { Navigate, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Categoria from './routes/categoria'
import Productos from './routes/productos'
import { Home } from './routes/Home'
import { Detalle } from './Components/detalle/detalle'
import UserContextProvider from './useContext/userContext/userContextProvider'
import Carrito from './routes/Carrito'
import CartContextProvider from './useContext/cartContext/CartContextProvider'

function App() {

  return (
      <div className='contenedor'>
        
        <UserContextProvider>
        <CartContextProvider>
       <NavBar />
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path='/category/:categoria' element={<Categoria></Categoria>}></Route>
        <Route path='/item/:id' element={<Detalle></Detalle>}/>
        <Route path='/cart' element={<Carrito></Carrito>}/>
        <Route path='/*' element={<Navigate to="/"/>}></Route>
        </Routes> 
        </CartContextProvider>
       </UserContextProvider>
       
       
      
      </div>


  )
}

export default App
