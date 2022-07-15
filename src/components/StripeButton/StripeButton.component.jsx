import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K2HtfKzGntR4WPoomHJRdyymeLigk89EqKwmyEWPwv8Dr0YND1rk2IGgi9nRCJ0W0BL4oMxazG1LwRy1bI2K61b00zpqpPxoj'

  const onToken = token => {
    console.log(token);
    alert('Payment successful!')
  }

  // gotten from github but use documentation for more styles
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
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton