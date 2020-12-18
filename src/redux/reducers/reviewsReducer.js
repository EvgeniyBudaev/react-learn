import { ADD_REVIEW } from '../constants';
import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

const reviewsReducer = (state = arrToMap(normalizedReviews), action) => {
	const {type, payload, reviewId, userId} = action

	switch (type) {
		case ADD_REVIEW:
			const { text, rating } = payload.review;
			return {
				...state,
				[reviewId]: { id: reviewId, userId, text, rating },
			};
		default:
			return state
	}
}

export default reviewsReducer
