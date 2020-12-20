import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import Menu from '../menu'
import Reviews from '../reviews'
import Banner from '../banner'
import Rate from '../rate'
import Tabs from '../tabs'
import {averageRatingSelector} from '../../redux/selectors'

const Restaurant = (props) => {
	const {id, name, menu, reviews, averageRating} = props

	const tabs = [
		{ title: 'Menu', to: `/restaurants/${id}/menu` },
		{ title: 'Reviews', to: `/restaurants/${id}/reviews` },
	];

	return (
		<div>
			<Banner heading={name}>
				{!!averageRating && <Rate value={averageRating} />}
			</Banner>
			<Tabs tabs={tabs} />
			<Route
				path="/restaurants/:restId/menu"
				render={() => <Menu menu={menu} restaurantId={id} />}
			/>
			<Route
				path="/restaurants/:restId/reviews"
				render={() => <Reviews reviews={reviews} restaurantId={id} />}
			/>
		</div>
	)
}

Restaurant.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	menu: PropTypes.array,
	reviews: PropTypes.array,
	averageRating: PropTypes.number,
}

export default connect(
	createStructuredSelector({
		averageRating: averageRatingSelector,
	})
)(Restaurant);
