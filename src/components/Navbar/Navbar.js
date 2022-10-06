import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='header' style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className='header__titulo'>
                <h1 
                /*</div>style={{ 
                    backgroundColor: 'green',
                    color: 'white'
                }}*/ >Ecommerce de MisatoEve</h1>
            </div>
            <div>
                <Link to={`/category/tablet`} className='header__nav--li'>Tablets</Link>
                <Link to={`/category/televisores`} className='header__nav--li'>Televisores</Link>
                <Link to={`/category/celular`} className='header__nav--li'>Celulares</Link>
                <Link to={`/category/notebook`} className='header__nav--li'>Notebooks</Link>
                <Link to={`/category/camaras`} className='header__nav--li'>Cámaras</Link>
            </div>
            <div>
                <CartWidget />
                <span className="icons__li p-2 fs-4">
                </span>
            </div>
        </nav>
    )
}

export default Navbar