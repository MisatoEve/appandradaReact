import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <h1 
                style={{ 
                    backgroundColor: 'green',
                    color: 'white'
                }} >Ecommerce de MisatoEve</h1>
            </div>
            <div>
                <button>Tablets</button>
                <button>Televisores</button>
                <button>Celulares</button>
                <button>Notebooks</button>
                <button>Cámaras</button>
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