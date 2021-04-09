import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { authReducer } from './redux/authentication/authenticationReducer'
import { userRegistrationReducer } from './redux/userRegistration/userRegistrationReducer'
import { recruiterListReducer } from './redux/recruiterList/recruiterListReducer'
const reducer = combineReducers({
  userLogin: authReducer,
  userRegister: userRegistrationReducer,
  recruiterList: recruiterListReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
