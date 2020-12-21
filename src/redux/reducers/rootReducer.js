import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import orderReducer from './orderReducer'
import restaurantsReducer from './restaurantsReducer'
import productsReducer from './productsReducer'
import reviewsReducer from './reviewsReducer'
import usersReducer from './usersReducer'
import history from '../../history'

const rootReducer = combineReducers({
	router: connectRouter(history),
	order: orderReducer,
	restaurants: restaurantsReducer,
	products: productsReducer,
	reviews: reviewsReducer,
	users: usersReducer,
})

export default rootReducer
