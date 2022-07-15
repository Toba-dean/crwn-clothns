import './CollectionPreview.styles.scss'

import CollectionItem from '../collection-item/CollectionItem.component'

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
          // filter the collection to just show 4 items.
          items.filter((_, idx) => idx < 4).map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview