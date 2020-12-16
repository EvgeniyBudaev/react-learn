import React from 'react'
import PropTypes from 'prop-types'
import styles from './navigation.module.css'

function Navigation(props) {
	const {restaurants, handleRestaurantClick} = props
	return (
		<div className={styles.list}>
			{restaurants.map((restaurant) => (
				<span
					key={restaurant.id}
					className={styles.restaurant}
					onClick={() => handleRestaurantClick(restaurant.id)}
				>
					{restaurant.name}
				</span>
			))}
		</div>
	)
}

Navigation.propTypes = {
	restaurants: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	onRestaurantClick: PropTypes.func,
}

export default Navigation
