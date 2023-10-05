import React from 'react'
import Sort from './Sort'

const Header = ({start, end, total}) => {
  return (
    <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
            <span className="mr-md-auto"><i className="fa fa-filter"></i> FILTER <small className="px-2">Home / Shop</small></span>
            <span className="px-2 text-muted">Showing {start+1}-{end} results of { total }</span>
            <Sort />
        </div>
    </header>
  )
}

export default Header