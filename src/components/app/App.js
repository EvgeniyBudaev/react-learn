import React from 'react'
import PropTypes from 'prop-types'
import Restaurants from '../restaurants'
import Header from '../header'

function App(props) {
	return (
		<div className="App">
			<Header />
			<Restaurants restaurants={props.restaurants} />
		</div>
	)
}

App.propTypes = {
	restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default App
