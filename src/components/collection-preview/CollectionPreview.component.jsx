import './CollectionPreview.styles.scss'

import CollectionItem from '../collection-item/CollectionItem.component'
import withRouter from '../../HOC/withRouter'

import { useLocation, useNavigate } from 'react-router-dom'

const CollectionPreview = ( { title, items, routeName }) => {

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className='collection-preview'>
      <h1 
        className='title'
        onClick={() => navigate(`${location.pathname}/${routeName}`)}
      >{title}</h1>
      <div className='preview'>
        {
          items.filter((_, idx) => idx < 4).map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview