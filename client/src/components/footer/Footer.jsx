import './footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return(
        <footer className='footer'>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
      
        <hr></hr>
       
        <p className='NombreFooter'>Dionisio Wines</p>
        <p className='MailFooter'>DionisioWinesAr@gmail.com</p>
      </div>
      <hr></hr>
      <div class="col-md-4">
        <h4 className='Siguenos'>Síguenos en redes sociales</h4>
        <ul class="list-unstyled">
  <li><a className='instagram' href="https://www.instagram.com/dionisiowinestienda"><i class="bi bi-instagram"></i>DionisioWines</a></li>
  <li style={{ display: 'inline-block', margin: '0 0.4em  ' , color:'white' }}><a href="https://github.com/victorwake"><i class="bi bi-github"></i></a></li>
  <li style={{ display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/Lucho2590"><i class="bi bi-github"></i></a></li>
  <li style={{ display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/MarianoBocc"><i class="bi bi-github"></i></a></li>
  <li style={{  display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/JoseGermanx"><i class="bi bi-github"></i></a></li>
  <li style={{  display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/fsoria"><i class="bi bi-github"></i></a></li>
  <li style={{ display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/rodri1013"><i class="bi bi-github"></i></a></li>
  <li style={{ display: 'inline-block', margin: '0 0.4em  ' , color:'white'}}><a href="https://github.com/Eduardocid200"><i class="bi bi-github"></i></a></li>
</ul>
      </div>
      </div>
      <hr></hr>
    <div class="row">
      <div class="col-md-6">
        <p className='copyright'>&copy; 2023 DionisioWines. Todos los derechos reservados.</p>
      </div>
      <div class="col-md-6 ">
      <Link to="/terminos" style={{color: 'white'}}>Términos y Condiciones</Link>
      </div>
    </div>
  </div>
</footer>
    )
}