import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss'

import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      {/* the bag icon */}
      <ShoppingIcon className='shopping-icon' />
      {/* the number in the bag */}
      <span className='item-count'>{itemsCount}</span>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
})

// the toggle state
const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)