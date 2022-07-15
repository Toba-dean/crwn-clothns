import './MenuItem.styles.scss'

import { useNavigate } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {

  let navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(`${linkUrl}`)}>

      {/* The reason for this div is because we don't want the image to get bigger than the containing div when the parent div is hovered */}
      <div 
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="content">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  )
}

export default MenuItem