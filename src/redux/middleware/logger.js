const logger = (store) => (next) => (action) => {
	console.log('store before', store.getState())
	console.log('action', action)
	next(action)
	console.log('store after', store.getState())
}

export default logger
