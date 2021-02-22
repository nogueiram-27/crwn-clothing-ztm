import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems , selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { CheckoutContainer, HeaderContainer, HeaderBlockContainer, TotalContainer, TestWarningContainer } from './checkout.styles'

const CheckoutPage = ({ cartItems , cartTotal }) => (
    <CheckoutContainer>
        <HeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </HeaderContainer>
        {
            cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
        }
        <TotalContainer>
            <span>TOTAL:${cartTotal}</span>
        </TotalContainer>
        <TestWarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp:01/23 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={cartTotal} />
    </CheckoutContainer>
)

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)