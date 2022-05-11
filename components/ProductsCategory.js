import React from 'react'
import ProductCategoryDirectLinks from './ProductCategoryDirectLinks'
import ProductCategorySelectorGroup from './ProductCategorySelectorGroup'

const ProductsCategory = () => {

  return (
    <div className='sticky top-[124px] es:top-[107px] sm:top-[70px] md:top-[60px] z-10 bg-white'>
      <div className="flex justify-center items-center p-2 border-1 m-auto border-slate-100 shadow-md">
        <ProductCategoryDirectLinks ImageSrc="/products/headerCategory/Mobiles.webp" Text="Mobiles" Links="/mobiles"/>
        <ProductCategoryDirectLinks ImageSrc="/products/headerCategory/Laptops.webp" Text="Laptops" Links="/laptops"/>
        <ProductCategorySelectorGroup ImageSrc="/products/headerCategory/Fashion.webp" Text="Fashion"/>
        <ProductCategorySelectorGroup ImageSrc="/products/headerCategory/Electronics.webp" Text="Electronics"/>
        <ProductCategorySelectorGroup ImageSrc="/products/headerCategory/Footwear.webp" Text="Footwear"/>
      </div>
    </div>
  )
}

export default ProductsCategory
