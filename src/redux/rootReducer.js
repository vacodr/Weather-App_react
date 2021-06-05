import { combineReducers } from 'redux'
import temperatureReducer from './temperature/t-reducer'

const rootReducer = combineReducers({
    temperature: temperatureReducer
})

export default rootReducer