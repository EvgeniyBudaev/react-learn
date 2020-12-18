import {normalizedReviews as defaultReviews} from '../../fixtures'

const reviewsReducer = (reviews = defaultReviews, action) => {
	const {type} = action

	switch (type) {
		default:
			return reviews
	}
}

export default reviewsReducer
