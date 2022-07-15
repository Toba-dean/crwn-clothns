import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles'

// The loading animation
const Spinner = () => {
  return (
    <SpinnerOverlay>
     <SpinnerContainer />
   </SpinnerOverlay>
  )
}

export default Spinner