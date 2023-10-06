import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ecommerce.css'
import Home from './components/Home';

import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { FilterContextProvider } from './context/filterContext';


function App() {
  return (
    <Router>
      <FilterContextProvider >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </FilterContextProvider>
    </Router>
  );
}

export default App;
