import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Card from './Components/card/card'

function App() {

  return (
      <div className='contenedor'>
        <NavBar />
        <div className='contenedor-cards'> 
        <Card img="./assets/Galeria5.jpg" nombre="Buzo Oversize" precio="$23000"/>
        <Card img="./assets/Galeria5.jpg" nombre="Buzo Oversize" precio="$23000"/>
        <Card img="./assets/Galeria5.jpg" nombre="Buzo Oversize" precio="$23000"/>
        </div>
      </div>
  )
}

export default App
