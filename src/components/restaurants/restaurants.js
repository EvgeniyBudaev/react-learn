import React from 'react'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import Tabs from '../tabs'
import {connect} from 'react-redux'

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

const mapStateToProps = (state) => ({
	restaurants: state.restaurants,
})

export default connect(mapStateToProps)(Restaurants)
