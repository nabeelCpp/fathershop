import React from 'react'
import Sort from './Aside/Sort'
import Header from './Main/Header'
import Product from './Main/Product'
import { useFilterContext } from '../context/filterContext'
import ProductsList from './Main/ProductsList'

const Main = () => {
    const {filtered_products, products_to_display, current_page, items_per_page, jumpToNextPage} = useFilterContext()
    const start = (current_page - 1) * items_per_page
    const endRecs = ( ( ( current_page - 1) * items_per_page) + items_per_page )
    const end = endRecs > filtered_products.length ? filtered_products.length : endRecs 
    return (
        <main className="col-md-9">
            <Header start={start} end={end} total={filtered_products.length} />

            <ProductsList products = {products_to_display} />


            <nav className="mt-4" aria-label="Page navigation sample">
                <ul className="pagination">
                    <li className={current_page == 1 ? "page-item disabled" : "page-item"}><button className="page-link" onClick={jumpToNextPage} value={current_page-1}>{'<<'}</button></li>
                    <li className={current_page >= Math.ceil(filtered_products.length / items_per_page) ? "page-item disabled" : "page-item"}><button className="page-link" onClick={jumpToNextPage} value={parseInt(current_page)+1}>{'>>'}</button></li>
                </ul>
            </nav>
        </main>
    )
}

export default Main