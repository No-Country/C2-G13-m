import { Link } from 'react-router-dom';

const NavbarUsuario = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light NavUsuario">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link to="" className="text-decoration-none">
            <span className="nav-link active text-white" aria-current="page">Hotel Olympia</span>
            </Link>
            </ul>
          <ul  className="navbar-nav ml-auto mb-2 mb-lg-0">
          <img src="" className="img-fluid rounded-circle avatarPerfil me-1" alt="foto" />
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Nombre del Usuario
            </span>
            <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <Link to="" className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"><i className="fas fa-file-download"></i> Mis Reservas</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
             <Link to="favoritos"  className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"></span><i className="fas fa-star"></i> Favotiros
             </Link>
              <li><hr className="dropdown-divider" /></li>
              <Link to="perfil"  className="text-decoration-none text-black">
                <span className="dropdown-item" href="#"><i className="fas fa-address-card"></i> Perfil</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
              <Link  to="configuracion" className="text-decoration-none text-black">
              <span className="dropdown-item" href="#"><i className="fas fa-cogs"></i> Configuración</span>
              </Link>
              <li><hr className="dropdown-divider" /></li>
            <Link to="/"  className="text-decoration-none text-black"><span className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i> Salir</span></Link>
          </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavbarUsuario;