const orderReducer = (amount = 0, action) => {
	switch (action.type) {
		case 'decrement':
			return amount - 1
		case 'increment':
			return amount + 1
		default:
			return amount
	}
}

export default orderReducer
