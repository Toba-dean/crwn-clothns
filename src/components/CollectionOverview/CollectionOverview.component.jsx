import './CollectionOverview.styles.scss'

import CollectionPreview from '../collection-preview/CollectionPreview.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {
        collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      } 
    </div>
  )
}

// get the collection from redux
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)