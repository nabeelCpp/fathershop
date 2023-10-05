import React from 'react'
import { useFilterContext } from '../../context/filterContext'


const Sort = () => {
    const {sorting, sorting_value} = useFilterContext()
  return (
    <select className="mr-2 form-control" onChange={sorting} id='sorting'>
        <option value='' disabled selected={sorting_value == ''}>Sort Products</option>
        <option value='lowest' selected={sorting_value == 'lowest'}>Price (Lowest)</option>
        <option value='highest' selected={sorting_value == 'highest'}>Price (Highest)</option>
        <option value={'a-z'} selected={sorting_value == 'a-z'}>A-Z</option>
        <option value={'z-a'} selected={sorting_value == 'z-a'}>Z-A</option>
    </select>
  )
}

export default Sort