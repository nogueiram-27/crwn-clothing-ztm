import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden, checkoutCart } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, ButtonContainer } from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, history, dispatch }) => {   
    return(
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ? (
                    cartItems.map((cartItem) => <CartItem key= {cartItem.id} item={cartItem}/>)
                ) : (
                    <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>
                )
                
            }
        </CartItemsContainer>
        <ButtonContainer 
        onClick = {() =>{
            history.push('/checkout');
            dispatch(toogleCartHidden());
            dispatch(checkoutCart(cartItems))
        }}>
            GO TO CHECKCOUT
        </ButtonContainer>
    </CartDropdownContainer>
)}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));