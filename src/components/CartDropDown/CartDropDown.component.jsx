import './CartDropDown.styles.scss'

import CustomButton from '../CustomButton/CustomButton.component'
import CartItem from '../CartItem/CartItem.component'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import { useNavigate } from 'react-router-dom'

const CartDropDown = ({ cartItems, dispatch }) => {

  let navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          // check if there is an element in the cart else show the span.
          cartItems.length ? 
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          )) : (
            <span className='empty-message'>
              Your cart is empty.
            </span>
          )
        }
      </div>

{/* when button is clicked go to the check out page */}
      <CustomButton onClick={() => {
        navigate('/checkout')

        // then dispatch a hidden state
        dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

// get the cart item state form redux
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)