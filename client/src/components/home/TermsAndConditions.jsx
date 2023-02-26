import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './termsandconditions.css'
function TermsAndConditions() {
  return (
    <div className='terminos-container'>
        <Link to="/home">
            <Button stylr='background:transparent'
            variant="success" 
            >
            Volver al inicio
            </Button>
          </Link>
    <h1>Términos y Condiciones</h1>
    <p>En Dionisio Wines nos tomamos muy en serio la privacidad y seguridad de nuestros usuarios. Por favor, lea detenidamente los siguientes términos y condiciones antes de utilizar nuestros servicios:</p>
    <ol>
      <li><strong>Privacidad:</strong> Nos comprometemos a proteger y respetar su privacidad. No compartimos sus datos personales con terceros sin su consentimiento explícito. Al utilizar nuestros servicios, acepta nuestra Política de Privacidad.</li>
      <hr></hr>
      <li><strong>Seguridad:</strong> Hacemos todo lo posible para garantizar que nuestros servicios sean seguros y confiables. Sin embargo, no podemos garantizar la seguridad absoluta de su información. Al utilizar nuestros servicios, usted acepta asumir el riesgo asociado con cualquier información que comparta con nosotros.</li>
      <hr></hr>
      <li><strong>Uso de los servicios:</strong> Usted acepta utilizar nuestros servicios únicamente con fines legales y de acuerdo con estos términos y condiciones. No puede utilizar nuestros servicios para actividades ilegales o fraudulentas, ni para cualquier otro propósito que viole estos términos y condiciones.</li>
      <hr></hr>
      <li><strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigencia tan pronto como se publiquen en nuestro sitio web. Le recomendamos que revise regularmente estos términos y condiciones para estar al tanto de cualquier cambio.</li>
      <hr></hr>
      <li><strong>Contáctenos:</strong> Si tiene alguna pregunta o comentario sobre estos términos y condiciones, no dude en ponerse en contacto con nosotros a través de nuestro sitio web o correo electrónico.</li>
    </ol>
  </div>
  );
}

export default TermsAndConditions;