import React, {useEffect} from 'react'
import {Route, Link} from 'react-router-dom'
import Restaurants from '../components/restaurants/restaurants'
import Loader from '../components/loader'
import {loadRestaurants} from '../redux/actionCreators/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {restaurantsListSelector, restaurantsLoadedSelector, restaurantsLoadingSelector} from '../redux/selectors'


function RestaurantsPage(props) {
	const {loadRestaurants, loading, loaded, restaurants, match} = props

	useEffect(() => {
		if (!loading && !loaded) loadRestaurants()
	}, []) // eslint-disable-line

	if (loading || !loaded) return <Loader />;
	if (match.isExact) {
		return (
			<div>
				<div>select page</div>
				{restaurants.map(({id, name}) => <div key={id}>
					<Link to={`/restaurants/${id}`}>
						{name}
					</Link>
				</div>)}
			</div>
		)
	}

	return (
		<Route path="/restaurants/:restId" component={Restaurants} />
	)
}

export default connect(  createStructuredSelector({
		restaurants: restaurantsListSelector,
		loading: restaurantsLoadingSelector,
		loaded: restaurantsLoadedSelector,
	}),
	{ loadRestaurants })(RestaurantsPage)