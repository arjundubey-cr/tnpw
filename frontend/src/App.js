import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PastRecruiters from './screens/PastRecruiters'
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/pastrecruiters' component={PastRecruiters} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
