import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const stripePublishableKey = 'pk_test_51IKqfhE4b6tUP6G5ekZkS8F2RoGWf4VMVcLU7Gz6k01uzvQcjRdMmqjqjOYQJ7Lq2BeRIUDWgTtrfyDEKyk5xuud00FgcbE6xv';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');        
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

export default StripeCheckoutButton;