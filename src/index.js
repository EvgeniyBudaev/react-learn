import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {ConnectedRouter} from 'connected-react-router'
import App from './components/app'
import './index.css'
import store from './redux/store'
import reportWebVitals from './reportWebVitals'
import history from './history'

// DEV ONLY!!!
window.store = store

ReactDOM.render(
	<React.StrictMode>
			<Provider store={store}>
				<ConnectedRouter history={history}>
				<App />
				</ConnectedRouter>
			</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
