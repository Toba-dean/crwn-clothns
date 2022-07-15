import './CheckOut.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.component'
import StripeButton from '../../components/StripeButton/StripeButton.component'

const CheckOut = ({ cartItems, totalValue }) => {
  return (
    <div className='checkout-page'>
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>Deescription</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} item={cartItem} />
        ))
      }

      <div className="total">
        <span>TOTAL: ${totalValue}</span>
      </div>
      <div className="warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/22 - CVV: 123
      </div>
      <StripeButton price={totalValue} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartTotal
})

export default connect(mapStateToProps)(CheckOut)