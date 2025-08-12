import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import { latestProducts } from '../../assets/mockdata'
import ProductCard from '../../components/ProductCard'

function Products() {
  return (
    <div>
        <BreadCrumb/>
         <div className="grid justify-items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 my-8">
          {latestProducts.map((el, i) => (
            <ProductCard key={i} data={el} />
          ))}
        </div>
    </div>
  )
}

export default Products