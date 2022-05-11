import React from 'react'
import PropTypes from 'prop-types'

const ProductCategorySelectorGroup = props => {
  return (
    <div className="flex-col text-center p-1 m-auto items-center">
        <img className="h-14 m-auto" src={props.ImageSrc} alt={props.Text}/>
        <p className="font-bold">{props.Text}</p>
    </div>
  )
}

ProductCategorySelectorGroup.propTypes = {

}

export default ProductCategorySelectorGroup
