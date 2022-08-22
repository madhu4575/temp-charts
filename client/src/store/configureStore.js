import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import temperatureReducer from '../reducers/temperatureReducer'

const configStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        temperature: temperatureReducer
    }), applyMiddleware(thunk))

    return store
}

export default configStore