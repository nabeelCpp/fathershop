import { useFilterContext } from "../../context/filterContext"


const FilterByRatings = () => {
    const { filterByRatings, filter } = useFilterContext()
    const { ratings } = filter
    const style = {color: '#2aca42'}
  return (
    <article className="filter-group">
        <header className="card-header">
            <a href="#" className="text-muted" data-toggle="collapse" data-target="#collapse_56" aria-expanded="true" >
                <i className="icon-control fa fa-chevron-down"></i>
                <h6 className="title">FILTER BY RATINGS </h6>
            </a>
        </header>
        <div className="filter-content collapse show" id="collapse_56">
            <div className="card-body" id="colour">
                <label className="custom-control custom-checkbox">
                    <input type="radio" className="custom-control-input" name='ratings' value='high' onChange={filterByRatings} checked={ratings == 'high'} />
                    <div className="custom-control-label">
                        Low To High
                    </div>
                </label>
                <label className="custom-control custom-checkbox">
                    <input type="radio" className="custom-control-input" name='ratings' value='low' onChange={filterByRatings} checked={ratings == 'low'} />
                    <div className="custom-control-label">
                        High To Low
                    </div>
                </label>
            </div> 
        </div>
    </article> 
  )
}

export default FilterByRatings