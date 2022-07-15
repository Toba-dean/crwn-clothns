import './Directory.styles.scss'

import MenuItem from '../MenuItem/MenuItem.component'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'


const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {
        sections?.map(({ id, ...restProps }) => (
          <MenuItem key={id} {...restProps} />
        ))
      } 
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
