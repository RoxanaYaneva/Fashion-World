import React from 'react'
import PropTypes from 'prop-types'

const ProductInCart = ({ onButtonClick, count }) => (
  <li
    onButtonClick={onButtonClick}
  >
    COUNT: {count}
  </li>
)

ProductInCart.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default ProductInCart