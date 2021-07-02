import React from 'react'
import { Pagination } from './Pagination'
import { ProductListItem } from './ProductListItem'

export const ProductList = ({data, page, setPage}) => {

    console.log(data)
    return (
        <div>
            {
                data.map(item => <ProductListItem key = {item.id} {...item} />)
            }

            <Pagination page ={page} setPage = {setPage} />
        </div>
    )
}
