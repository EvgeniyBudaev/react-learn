import React, {useEffect} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'
import Loader from '../components/loader'
import {loadRestaurants} from '../redux/actionCreators/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {restaurantsListSelector, restaurantsLoadedSelector, restaurantsLoadingSelector} from '../redux/selectors'


function RestaurantsPage(props) {
	const {
		restaurants,
		loadRestaurants,
		loading,
		loaded,
		match,
	} = props

	useEffect(() => {
		if (!loading && !loaded) loadRestaurants()
	}, []) // eslint-disable-line

	if (loading || !loaded) return <Loader />;
	if (match.isExact) {
		return <Redirect to={`/restaurants/${restaurants[0].id}`} />;
	}

	return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(  createStructuredSelector({
		restaurants: restaurantsListSelector,
		loading: restaurantsLoadingSelector,
		loaded: restaurantsLoadedSelector,
	}),
	{ loadRestaurants })(RestaurantsPage)