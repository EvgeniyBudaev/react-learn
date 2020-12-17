import {combineReducers} from 'redux'
import orderReducer from './orderReducer'
import restaurantsReducer from './restaurantsReducer'

const rootReducer = combineReducers({
	order: orderReducer,
	restaurants: restaurantsReducer,
})

export default rootReducer
