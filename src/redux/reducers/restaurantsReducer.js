import produce from 'immer'
import { ADD_REVIEW } from '../constants';
import { normalizedRestaurants } from '../../fixtures';
import { arrToMap } from '../utils';

const restaurantsReducer = (state = arrToMap(normalizedRestaurants), action) => {
	const {type, payload, reviewId} = action

	switch (type) {
		case ADD_REVIEW:
			// Используется immer без мутирования данных
			return  produce(state, draft => {
				draft[payload.restaurantId].reviews.push(reviewId)
			})
		// case ADD_REVIEW:
		// 	const restaurant = state[payload.restaurantId];
		// 	return {
		// 		...state,
		// 		[payload.restaurantId]: {
		// 			...restaurant,
		// 			reviews: [...restaurant.reviews, reviewId],
		// 		},
		// 	}
		default:
			return state
	}
}

export default restaurantsReducer
