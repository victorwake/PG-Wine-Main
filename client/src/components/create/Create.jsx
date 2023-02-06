import './create.css';
import { Link } from 'react-router-dom';

export const Create = () => {
    return (
        <div className="container">
            <img className="create" src="https://campus.educacion.unmsm.edu.pe/PAGINA.jpg" alt="" />
       
       <Link to='/home'>
            <button>
                Volver a inicio
            </button>
        </Link>
        </div>
    )
}