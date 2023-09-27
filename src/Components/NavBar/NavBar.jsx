import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import IconCarrito from '../carrito/IconCardWidget';
import { Link, NavLink } from 'react-router-dom';
import IconCardWidgate from '../carrito/IconCardWidget';

const NavBar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-white">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" href="#">Bambole</  Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active text-white">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/productos" className="nav-link text-white" >Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/jewelery" className="nav-link text-white">jewelery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/mens" className="nav-link text-white">Mens</NavLink>
          </li>
        </ul>
      </div>
      <IconCardWidgate/>
    </div>
  </nav>

    )
}

export default NavBar;