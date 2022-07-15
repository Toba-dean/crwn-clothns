import './CustomButton.styles.scss'

const CustomButton = ({ children, isGoogleButton, inverted, ...restProps }) => {
  return (
    <button 
      className={`${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google-sign-in' : ''} custom-button`} {...restProps}
    >
      {children}
    </button>
  )
}

export default CustomButton