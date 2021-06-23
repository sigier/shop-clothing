import React from 'react';

import StripeCheckout from 'react-stripe-checkout'; 
 


const StripeCheckoutButton = ({ totalAmount })=>{
    const totalAmountForStripe = 100 * totalAmount;
    
    const publishableKey ='';
    
    const onToken = token => {
        alert('Payment completed');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Fashion Store Ltd'
            shippingAddress
            billingAddress
            image='https://svgshare.com/i/YRZ.svg'
            description={`Total amount is $${totalAmount}`}
            amount={totalAmountForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> 
    ) 
};

export default StripeCheckoutButton;