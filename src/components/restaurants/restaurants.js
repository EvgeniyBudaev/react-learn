import React, {useMemo, useState} from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import Navigation from '../navigation'

function Restaurants(props) {
	const {restaurants} = props
	const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id)

	const activeRestaurant = useMemo(
		() =>
			restaurants.find((restaurant) => restaurant.id === activeRestaurantId),
		[activeRestaurantId, restaurants]
	)

	return (
		<div>
			<Navigation
				handleRestaurantClick={setActiveRestaurant}
				restaurants={restaurants}
			/>
			<Restaurant restaurant={activeRestaurant} />
		</div>
	)
}

Restaurants.propTypes = {
	restaurants: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export default Restaurants
