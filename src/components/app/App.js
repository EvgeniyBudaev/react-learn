import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from '../header'
import Basket from '../basket'
import RestaurantsPage from '../../pages/restaurants-page'


function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/checkout" component={Basket} />
				<Route path="/restaurants" component={RestaurantsPage} />
				<Route path="/error" component={() => <h1>Error Page</h1>} />
				<Route path="/" component={() => '404 - Not found'} />
			</Switch>
		</div>
	)
}

export default App
