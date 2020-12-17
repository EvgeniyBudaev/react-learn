import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import Tabs from '../tabs'

function Restaurants(props) {
	const {restaurants} = props
	const tabs = restaurants.map((restaurant) => ({
		title: restaurant.name,
		content: <Restaurant restaurant={restaurant} />,
	}))

	return <Tabs tabs={tabs} />
}

Restaurants.propTypes = {
	restaurants: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			restaurant: PropTypes.object,
		}).isRequired
	).isRequired,
}

export default Restaurants
