import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishibleKey = 'pk_test_qx3ChSiMULcJfPsHBiJGXQql000cuKebO1';
	
	const onToken = token => {
		console.log(token);
		alert('Payment successful');
	}
	
	return (
		<StripeCheckout 
			label='Pay Now'
			name='CRWN Clothing inc.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishibleKey}
		/>
	);
};

export default StripeCheckoutButton;