import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import Restaurant from '../restaurant'
import {restaurantsListSelector} from '../../redux/selectors'
import styles from './restaurants.module.css'
import {loadRestaurants} from '../../redux/actionCreators/actions'

function Restaurants(props) {
	const {restaurants, match} = props

	const {restId} = match.params

	const restaurant = restaurants.find(restaurant => restaurant.id === restId)



	return (
		<>
			<div className={styles.tabs}>
				{restaurants.map(({id, name}) => (
					<NavLink
						key={id}
						to={`/restaurants/${id}`}
						className={styles.tab}
						// activeStyle={{color: 'red'}}
						activeClassName={styles.active}
					>
						{name}
					</NavLink>
				))}
			</div>
			<Restaurant {...restaurant} />
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
