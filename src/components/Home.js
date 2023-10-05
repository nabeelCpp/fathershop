import React from 'react'
import Aside from './Aside'
import Main from './Main'



const Home = () => {
    
  return (
    <div className="container py-5">
        <div className="row">
            <Aside />
            <Main />
        </div>
    </div>
  )
}

export default Home