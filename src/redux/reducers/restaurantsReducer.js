import {normalizedRestaurants as defaultRestaurants} from '../../fixtures'

const restaurantsReducer = (restaurants = defaultRestaurants, action) => {
	const {type} = action

	switch (type) {
		default:
			return restaurants
	}
}

export default restaurantsReducer
