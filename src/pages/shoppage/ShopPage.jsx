import { Component } from 'react';
import './ShopPage.scss';

import CollectionOverviewComponent from '../../components/CollectionOverview/CollectionOverview.component';

import { Routes, Route } from 'react-router-dom'
import Collection from '../Collection/Collection';

import { convertCollectionSnapshotToMap, db } from '../../firebase/firebase.utils';
import { onSnapshot, collection } from "firebase/firestore";

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.action';

import withSpinner from '../../HOC/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverviewComponent)
const CollectionWithSpinner = withSpinner(Collection)

export class ShopPage extends Component{

  state = {
    loading: true
  }

  unsubscribeFromSnapShot = null

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = collection(db, 'collections')

    onSnapshot(collectionRef, async snapshot => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    });
  }
  
  // componentWillUnmount() {
  //   this.unsubscribeFromSnapShot()
  // } 

  render() {
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Routes>
          <Route path='/' element={<CollectionOverviewWithSpinner isLoading={loading} />} />
          <Route path='/:collectionId' element={<CollectionWithSpinner isLoading={loading} />} />
        </Routes>
      </div>
    )
  }
} 

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)