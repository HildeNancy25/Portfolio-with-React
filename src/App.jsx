import React from 'react'
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'
import HomePage from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Header from './components/Header'
import SocialMedia from './components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          
            <Route 
            path ='/'
            element ={<HomePage/>}
          />
          <Route 
            path ='/about'
            element ={<About/>}
          />
          <Route 
            path ='/skills'
            element ={<Skills/>}
          />
          <Route 
            path ='/projects'
            element ={<Projects/>}
          />
          <Route 
            path ='/contact'
            element ={<Contact/>}
          />
          {/* </Route> */}
        </Routes>
        <SocialMedia />
      </Router>
    </>
  )
}

export default App