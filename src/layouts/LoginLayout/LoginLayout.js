import React from 'react'
import '../CoreLayout/CoreLayout.scss'
import '../../styles/core.scss'

export const LoginLayout = ({ children }) => (
  <div className='container text-center'>
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

LoginLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default LoginLayout
