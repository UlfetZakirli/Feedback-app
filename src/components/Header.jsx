import React from 'react'
import PorpTypes from 'prop-types'

const Header = ({ text }) => {
    return (
        <div>{text}</div>
    )
}

Header.defaultProps = {
    text: 'Header page'
}

Header.propTypes = {
    text: PorpTypes.string.isRequired
}

export default Header