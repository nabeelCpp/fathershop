import React from 'react'
import { useFilterContext } from '../context/filterContext';
import Category from './Aside/Category';
import FilterByRatings from './Aside/FilterByRatings';
import FilterByPrice from './Aside/FilterByPrice';

const Aside = () => {
    const { all_products, clearAll } = useFilterContext()

    const getUniqueData = (products, property) => {
        let newData = products.map((p) => {
            const count = products.filter(prod => prod[property] === p[property]).length
            
            return {name: p[property], count: count }
        })
        newData = [{name: "All", count: products.length}, ...newData ]
        return newData.filter((item, index, self) => {
            return self.findIndex((obj) => {
              return JSON.stringify(obj) === JSON.stringify(item);
            }) === index;
        });
    }


    const categoryOnlyData = getUniqueData(all_products, "category")
  return (
    <aside className="col-md-3">
        <div className="card">
            <header className="card-body">
                <div className="row">
                    <b className="col-6">
                        REFINE
                    </b>
                    <button className="btn btn-link text-danger col-6 text-small" onClick={clearAll}>Clear All</button>
                </div>
                <hr />
            </header>
            <Category categories={categoryOnlyData} />
            <FilterByPrice /> 
           <FilterByRatings />
        </div> 
    </aside>
  )
}

export default Aside