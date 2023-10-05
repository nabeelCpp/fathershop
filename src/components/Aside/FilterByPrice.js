import React from 'react'
import { useFilterContext } from '../../context/filterContext'

const FilterByPrice = () => {
    const { filter, filterByPrice } = useFilterContext()
    const { price } = filter
    const { min, max} = price 
  return (
    <article className="filter-group">
        <header className="card-header">
            <a href="#" data-toggle="collapse" className="text-muted" data-target="#collapse_3" aria-expanded="true" >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">FILTER BY PRICE</h6>
            </a>
        </header>
        <div className="filter-content collapse show" id="collapse_3">
            <div className="card-body">
                <input type="range" className="custom-range" min="0" max='10000' value={min} name="min" onChange={filterByPrice} />
                <input type="range" className="custom-range" min='0' max="10000" name="max" value={max} onChange={filterByPrice} />
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Min</label>
                        <input className="form-control" placeholder="$0" type="number" value={min&&min} readOnly />
                    </div>
                    <div className="form-group text-right col-md-6">
                        <label>Max</label>
                        <input className="form-control" placeholder="$1,0000" type="number" value={max&&max} readOnly />
                    </div>
                </div> 
            </div>
        </div>
    </article>
  )
}

export default FilterByPrice