import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ContactScreen from './screens/ContactScreen'
import PastRecruiters from './screens/PastRecruiters'
import AcademicsScreen from './screens/AcademicsScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import ProfileScreen from './screens/ProfileScreen'
import WhyRecruit from './screens/WhyRecruit'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/pastrecruiters' component={PastRecruiters} exact />
          <Route path='/academics' component={AcademicsScreen} exact />
          <Route path='/contactus' component={ContactScreen} />
          <Route path='/register' component={RegistrationScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/whyfoet' component={WhyRecruit} />
        </>
      </main>
      <Footer />
    </Router>
  )
}

export default App
