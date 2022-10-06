import { useState, useEffect } from "react"
import { getProduct } from "../asyncMock"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    //const param = useParams()
    //console.log(param)

    useEffect(() =>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(product)

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Detalle del producto</h1>
            <section>
                <h2 className='card-title'>{product.name}</h2>
                <h3>{product.category}</h3>
                <img src={product.img} alt={product.name}></img>
                <p className='precioCard'>{product.price}</p>
                <h4>{product.description}</h4>
            </section>
        </div>
    )
}

export default ItemDetailContainer