import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import Restaurant from '../restaurant'
import {restaurantsListSelector} from '../../redux/selectors'
import styles from './restaurants.module.css'
import {loadRestaurants} from '../../redux/actionCreators/actions'
import Tabs from '../tabs'

function Restaurants(props) {
	const {restaurants, match} = props

	const {restId} = match.params

	const restaurant = restaurants.find(restaurant => restaurant.id === restId)

	const tabs = restaurants.map(({ id, name }) => ({
		title: name,
		to: `/restaurants/${id}`,
	}));

	return (
		<>
			<Tabs tabs={tabs} />
			{restaurant && <Restaurant {...restaurant} />}
		</>
	)

}

Restaurants.propTypes = {
	restaurants: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			restaurant: PropTypes.object,
		}).isRequired
	).isRequired,
}


export default connect(  createStructuredSelector({
		restaurants: restaurantsListSelector,
	}),
	{loadRestaurants}
	)(Restaurants)
