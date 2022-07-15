// import './Header.styles.scss';
import { 
  HeaderContainer, 
  OptionsContainer, 
  LogoContainer,
  OptionsLink
} from './Header.styles';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { signOut } from "firebase/auth";
import { auth } from '../../firebase/firebase.utils'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUsers } from '../../redux/user/user.selector';

import CartIcon from '../CartIcon/CartIcon.component';
import CartDropDown from '../CartDropDown/CartDropDown.component';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer> 
      <OptionsContainer>
        <OptionsLink to='/shop'>SHOP</OptionsLink>
        {/* <OptionsLink to='/contact'>CONTACT</OptionsLink> */}
        {
          // if user show the sign out page else sign in
          currentUser ? (
            // on click the sign out just sign out.
            <OptionsLink as='div' onClick={() => signOut(auth)}>SIGN OUT</OptionsLink>
          ) : (
            <OptionsLink to='/signin'>SIGN IN</OptionsLink>
          )
        }
        <CartIcon />
      </OptionsContainer>
      {
        // if hidden dont show else show cart dropdown
        hidden ? null : <CartDropDown />
      }
    </HeaderContainer>
  )
}

// get the user and hidden states
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
  hidden: selectHidden,
})

export default connect(mapStateToProps)(Header)