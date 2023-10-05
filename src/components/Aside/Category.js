import React from 'react'
import { useFilterContext } from '../../context/filterContext'

const Category = ({categories}) => {
    const { filter, filterProductsBasedOnCategory } = useFilterContext()
    const { category } = filter
  return (
    <article className="filter-group">
        <header className="card-header">
            <a href="#" className="text-muted" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true">
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">CATEGORIES </h6>
            </a>
        </header>
        <div className="filter-content collapse show" id="collapse_2">
            <div className="card-body" id="categories">
                {
                    categories.map((cat) => (
                        <label className="custom-control custom-checkbox" key={cat.name}>
                            <input type="radio" className="custom-control-input" name='category' value={cat.name} onChange={ filterProductsBasedOnCategory } checked={cat.name == category} />
                            <div className="custom-control-label">{cat.name}  
                            <b className="badge badge-pill badge-light float-right">{cat.count}</b>  </div>
                        </label>
                    ))
                }
            </div> 
        </div>
    </article> 
  )
}

export default Category