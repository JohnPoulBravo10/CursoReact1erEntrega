import { Navigate, Routes, Route} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Categoria from './routes/categoria'
import Productos from './routes/productos'
import { Home } from './routes/Home'
import { Detalle } from './Components/detalle/detalle'
import { Mens } from './routes/Mens'

function App() {

  return (
      <div className='contenedor'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/productos" element={<Productos></Productos>}></Route>
        <Route path="/jewelery" element={<Categoria></Categoria>}></Route>
        <Route path="/mens" element={<Mens></Mens>}></Route>
        <Route path='/detalle/:id' element={<Detalle></Detalle>}/>
        <Route path='/*' element={<Navigate to="/"/>}></Route>
      </Routes> 
      </div>


  )
}

export default App
