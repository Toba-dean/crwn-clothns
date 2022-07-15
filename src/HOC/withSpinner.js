import Spinner from "../components/Spinner/Spinner.component"

const withSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrapperComponent {...otherProps} />
}

export default withSpinner