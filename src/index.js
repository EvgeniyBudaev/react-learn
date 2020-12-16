import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/app'
import './index.css'
import {restaurants} from './fixtures'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'

// DEV ONLY!!!
window.store = store

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App restaurants={restaurants} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
