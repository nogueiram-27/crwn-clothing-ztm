import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, clearItem, updateUserCartItems } from '../../redux/cart/cart.actions'

import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer,RemoveButtonContainer } from './checkout-item.styles';

export const CheckoutItem = ( { cartItem, clearItem, addItem, removeItem, updateCartItems }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item' />
        </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => {
                        removeItem(cartItem);
                        updateCartItems();              
                    }}
                >&#10094;</div>
                <span>{quantity} </span> 
                <div onClick={() => {
                        addItem(cartItem);
                        updateCartItems(); 
                    }}
                >&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
        <RemoveButtonContainer onClick = {() => {
                    clearItem(cartItem);
                    updateCartItems(); 
                }}
            >&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    updateCartItems: () => dispatch(updateUserCartItems())
})

export default connect(null, mapDispatchToProps)(CheckoutItem);