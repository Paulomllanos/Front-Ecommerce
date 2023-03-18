import { useContext } from 'react';
// hook que nos permite obtener una funcion de navegación
import { useNavigate } from 'react-router-dom';

import  CartContext  from '../../../context/cartContext/cartContext';

import { Button } from '@mui/material';
import CartItem from '../cart-item/Cart-item';

import './Cart-dropdown.scss';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCartCheckoutHandler = () => {
        navigate('/cart')
    }

    console.log(cartItems)

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
                
            </div>
            <Button onClick={goToCartCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    );
};

export default CartDropdown;
