import cart from './assets/cartr1.jpg'

const CartWidget = () => {
    return (
        <div className='cart__count'> 
            <div style={{ color: 'white' }}>
            <img src={cart} alt='cart'/>
            3                 
            </div>
        </div>
    )
}

export default CartWidget