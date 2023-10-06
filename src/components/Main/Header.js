import React from 'react'
import Sort from './Sort'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'


const Header = ({start, end, total}) => {
  return (
    <header className="border-bottom mb-4 pb-3">
        <div className="form-inline">
            <span className="mr-md-auto"><FontAwesomeIcon icon={faFilter} /> FILTER <small className="text-muted px-2">Home / Shop</small></span>
            <span className="px-2 text-xx-small text-muted">Showing {start+1}-{end} of { total } results</span>
            <Sort />
        </div>
    </header>
  )
}

export default Header