import './Collection.scss'

import CollectionItemComponent from '../../components/collection-item/CollectionItem.component'
import withRouter from '../../HOC/withRouter'

import { selectCollection  } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'

const Collection = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2>{title}</h2>
      <div className="items">
        {
          items.map(item => (
            <CollectionItemComponent key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, { router: { params } }) => ({
  collection: selectCollection(params.collectionId)(state)
})

export default withRouter(connect(mapStateToProps)(Collection))