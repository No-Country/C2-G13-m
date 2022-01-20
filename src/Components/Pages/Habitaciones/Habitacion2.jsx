import { Link } from 'react-router-dom';
import premiumBed from '../../../Assets/premiumBed.jpg';

const Habitacion2 = () => {
  return (
    <>
     <div className="card" style={{width: '15rem'}}>
       <div className="text-center">
  <img src={premiumBed} className="card-img-top imgbed" alt="" />
       </div>
  <div className="card-body">
    <div className="d-flex"> 
    <h5 className="card-title text-center">Habitacion Matrimonial Premium</h5>
    <i className="far fa-heart"></i>
    </div>
    <h6 className="text-center">Comodidades:</h6>
    <i className="fas fa-wifi"></i> Internet de alta velocidad free.
    <br/>
      <i className="fas fa-bed"></i> Cama amplia.
      <br/>
      <i className="fas fa-play-circle"></i> Tv plana de 32" full hd.
      <br/>
      <i className="fas fa-broom"></i> Limpieza diaria.
        </div>
    <p class="text-center">Check-in 10Hs - Check-out 20Hs.</p>
    <div className="d-flex justify-content-between m-2">
      <Link to="/" className="text-decoration-none text-black">Ver Más</Link> 
      <Link to="/" className="text-decoration-none text-black">Reservar</Link>
    </div>
  </div>
</>
  )
}

export default Habitacion2;