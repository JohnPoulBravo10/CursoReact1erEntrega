import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconCarrito from '../carrito/IconCarrito';

const NavBar = () => {
  return (
    
    <nav class="navbar navbar-expand-lg bg-body-red">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Bambole</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ubicacion</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Contacto</a>
          </li>
        </ul>
      </div>
      <IconCarrito/>
    </div>
  </nav>

    )
}

export default NavBar;