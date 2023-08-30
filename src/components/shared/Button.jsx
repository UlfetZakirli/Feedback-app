import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, version, type, isDisabled }) => {
    return (
        <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    version: PropTypes.string.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}

export default Button