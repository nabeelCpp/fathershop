import React from 'react'

function Sort() {
  return (
    <header class="border-bottom mb-4 pb-3">
        <div class="form-inline">
            <span class="mr-md-auto"><i class="fa fa-filter"></i> FILTER <small class="px-2">Home / Shop</small></span>
            <span class="px-2 text-muted">Showing <span>1</span>-<span>12</span> results of <span>32</span></span>
            <select class="mr-2 form-control">
                <option>Latest items</option>
                <option>Trending</option>
                <option>Most Popular</option>
                <option>Cheapest</option>
            </select>
        </div>
    </header>
  )
}

export default Sort