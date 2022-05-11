import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const ProductCategoryDirectLinks = props => {
  return (
    <Link href={props.Links}>
      <a className="flex-col text-center p-1 m-auto items-center">
          <img className="h-14 m-auto" src={props.ImageSrc} alt={props.Text} />
          <p className="font-bold">{props.Text}</p>
      </a>
    </Link>
  )
}

ProductCategoryDirectLinks.propTypes = {

}

export default ProductCategoryDirectLinks
