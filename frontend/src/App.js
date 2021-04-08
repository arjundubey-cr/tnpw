import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import PastRecruiters from './screens/PastRecruiters'
import AcademicsScreen from './screens/AcademicsScreen'
import LoginScreen from './screens/LoginScreen'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history'
const App = () => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Header />
        <main>
          <>
            <Route path='/login' component={LoginScreen} />
            <Route path='/pastrecruiters' component={PastRecruiters} exact />
            <Route path='/academics' component={AcademicsScreen} exact />
            <Route path='/' component={HomeScreen} exact />
          </>
        </main>
        <Footer />
      </Auth0ProviderWithHistory>
    </Router>
  )
}

export default App
