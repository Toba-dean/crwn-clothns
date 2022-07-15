import { Component } from 'react';

import { GlobalStyle } from './global.styles';

// Pages
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header.component';
import SigninAndSignup from './pages/signin-and-signup/Signin-and-Signup';
import CheckOut from './pages/CheckOut/CheckOut';

import { Routes, Route, Navigate } from 'react-router-dom';

// firebase
import { auth, createUserProfile, addCollectionsAndDocuments } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth'
import { onSnapshot } from "firebase/firestore";

import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUsers } from './redux/user/user.selector'
import { selectCollectionsForPreview } from './redux/shop/shop.selector'


class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser, collectionsArray } = this.props

    // this is an observer that gets the info of the observer on sign in.
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      // if there is a user authentication
      if (userAuth) {
        // create the user or get the user and save it in the variable userRef
        const userRef = await createUserProfile(userAuth);

        // this listener to receive the data and then set it to the current user state.
        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        // set it to null from the state.
        setCurrentUser(userAuth);
      }

      // array to add to the collection in the db, and just add the title and the items not everything in the array.
      const collectionToAdd = collectionsArray.map(({ title, items }) => ({ title, items }))

      // add this to the db just once so as not to duplicate the entry.
      // addCollectionsAndDocuments('collections', collectionToAdd)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='shop/*' element={<ShopPage />} />
          {/* on routing to signin, if user === null go to signinandsignup else go to the dashboard */}
          <Route exact path='signin' element={
            this.props.currentUser ? (
            <Navigate to='/' />) : (
            <SigninAndSignup />)
          }
          />
          <Route path='checkout' element={<CheckOut />} />
        </Routes>
      </div>
    );
  }
}

// using redux to pass the current user and collections array state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
  collectionsArray: selectCollectionsForPreview
})

// this dispaches the signed in user as a prop
// on sign in get the userAuth then dispatch it to the state so it updates it current user from null to the userAuth.
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
