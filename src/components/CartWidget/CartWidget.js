import cart from './assets/cartr1.jpg'

const CartWidget = () => {
    return (
        <div className="cart__count">
            <img src={cart} alt='cart'/>
            3
        </div>
    )
}

export default CartWidget