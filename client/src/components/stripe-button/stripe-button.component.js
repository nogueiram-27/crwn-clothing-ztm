import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { cleanUserCartItems } from '../../redux/cart/cart.actions'

const StripeCheckoutButton = ({ price, cleanCartItems }) => {
    const priceForStripe = price * 100;
    const stripePublishableKey = 'pk_test_51IKqfhE4b6tUP6G5ekZkS8F2RoGWf4VMVcLU7Gz6k01uzvQcjRdMmqjqjOYQJ7Lq2BeRIUDWgTtrfyDEKyk5xuud00FgcbE6xv';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment successful')
            cleanCartItems()
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error))
            alert('There was an issue with your payment. Please make sure you use the provided credit card')
        })
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={stripePublishableKey}
        />
    )
}

const mapDispatchToProps = (dispatch) => ({
    cleanCartItems: () => dispatch(cleanUserCartItems())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);