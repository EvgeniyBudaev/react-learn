import React from 'react'
import Restaurants from "../restaurants";
import Header from "../header";

function App(props) {
	return (
		<div className="App">
			<Header />
			<Restaurants restaurants={props.restaurants} />
		</div>
	)
}

export default App
