import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return (
        <section>
            { products.map(prod => (
                <Item key={prod.id} prod={prod}/>
            ))
            }
        </section>
    )
}

export default ItemList