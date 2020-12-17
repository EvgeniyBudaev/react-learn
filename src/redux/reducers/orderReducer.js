import {DECREMENT, INCREMENT} from '../constants'

// { [productId]: amount }
const orderReducer = (state = {}, action) => {
	const {type, payload} = action

	switch (type) {
		case DECREMENT:
			return {...state, [payload.id]: (state[payload.id] || 0) - 1}
		case INCREMENT:
			return {...state, [payload.id]: (state[payload.id] || 0) + 1}
		default:
			return state
	}
}

export default orderReducer
