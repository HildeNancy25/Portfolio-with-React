import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path ='/'
            element ={<HomePage/>}
          />
          <Route 
            path ='/About'
            element ={<AboutPage/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App