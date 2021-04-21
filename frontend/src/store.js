import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './redux/authentication/authenticationReducer'
import { userRegistrationReducer } from './redux/userRegistration/userRegistrationReducer'
import { recruiterListReducer } from './redux/recruiterList/recruiterListReducer'
import { departmentListReducer } from './redux/departmentList/departmentListReducer'
import { userDetailsReducer } from './redux/userDetails/userDetailsReducer'
import { userUpdateReducer } from './redux/userDetails/userDetailsReducer'
const reducer = combineReducers({
  userLogin: authReducer,
  userRegister: userRegistrationReducer,
  recruiterList: recruiterListReducer,
  departmentList: departmentListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
})
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return reducer(state, action)
}
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
