import { Button } from 'bootstrap'
import { NavLink } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <div class="container error-container">
        <h1 class="error-heading">404 - Page Not Found</h1>
        <p class="error-message">Sorry, the page you are looking for does not exist.</p>
        <NavLink to={'/'}>
            <button className="btn btn-primary home-button">Go to Home</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage