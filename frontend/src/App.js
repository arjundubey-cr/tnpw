import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import ProfileScreen from './screens/ProfileScreen'
import Students from './screens/Students'
import StudentListScreen from './screens/StudentListScreen'

const LazyPastRecruiters = React.lazy(() => import('./screens/PastRecruiters'))
const LazyDepartmentScreen = React.lazy(() =>
  import('./screens/DepartmentScreen')
)
const LazyAcademicsScreen = React.lazy(() =>
  import('./screens/AcademicsScreen')
)
const LazyContactScreen = React.lazy(() => import('./screens/ContactScreen'))

const App = () => {
  return (
    <Router>
      <ToastContainer limit={1} autoClose={10000} />
      <Header />
      <main>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={LoginScreen} />
          <Route path='/departments'>
            <LazyDepartmentScreen />
          </Route>
          <Route path='/pastrecruiters'>
            <LazyPastRecruiters />
          </Route>
          <Route path='/academics'>
            <LazyAcademicsScreen />
          </Route>
          <Route path='/contactus'>
            <LazyContactScreen />
          </Route>
          <Route path='/register' component={RegistrationScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/students' component={Students} />
          <Route path='/recruiter/studentlist' component={StudentListScreen} />
        </React.Suspense>
      </main>
      <Footer />
    </Router>
  )
}

export default App
