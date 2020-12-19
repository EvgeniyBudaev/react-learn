import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Restaurant from '../restaurant'
import Tabs from '../tabs'
import {restaurantsListSelector, restaurantsLoadedSelector, restaurantsLoadingSelector} from '../../redux/selectors'
import {loadRestaurants} from '../../redux/actionCreators/actions'
import Loader from '../loader'

function Restaurants(props) {
	const {restaurants, loadRestaurants, loading, loaded} = props

	useEffect(() => {
		if (!loading && !loaded) loadRestaurants()
	}, []) // eslint-disable-line

	if (loading || !loaded) return <Loader />;

	const tabs = restaurants.map((restaurant) => ({
		title: restaurant.name,
		content: <Restaurant {...restaurant} />,
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
	restaurants: restaurantsListSelector(state),
	loading: restaurantsLoadingSelector(state),
	loaded: restaurantsLoadedSelector(state),
})

const mapDispatchToProps = ({
	loadRestaurants
})

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
