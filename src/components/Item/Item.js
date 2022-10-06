import { Link } from "react-router-dom"
import './Item.css';

const Item = ({ prod }) => {

    return (
        <div>
        <article className='card container-fluid' style={{ width: '28rem'}}>
            <h2 className='card-title'>{prod.name}</h2>
            <h3 className='precioCard'>u$d {prod.price}</h3>
            <img src={prod.img} alt={prod.name}></img>         
            <Link to={`/detail/${prod.id}`} className='content'>ver más detalle</Link>                        
        </article>
        </div>
    )
}

export default Item