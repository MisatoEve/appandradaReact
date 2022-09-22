import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <h1>Ecommerce de MisatoEve</h1>
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
            </div>
        </nav>
    )
}

export default Navbar