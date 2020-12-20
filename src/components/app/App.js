import React from 'react'
import {Route} from 'react-router-dom'
import Restaurants from '../restaurants'
import Header from '../header'
import Basket from '../basket'


function App() {
	return (
		<div className="App">
			<Header />
			<Route path="/checkout" component={Basket} />
			<Route path="/restaurants" component={Restaurants } />
		</div>
	)
}

export default App
