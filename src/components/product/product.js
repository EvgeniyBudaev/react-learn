import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import counter from '../../hocs/counter'
import styles from './product.module.css'
import {decrement, increment} from '../../redux/actionCreators/actions'
import Button from '../UI/button'

function Product(props) {
	console.log('props', props)
	const {product, amount, decrement, increment} = props
	const {name, ingredients, price} = product

	return (
		<div className={styles.product} data-test="product">
			<div className={styles.content}>
				<div>
					<h4 className={styles.title}>{name}</h4>
					<p className={styles.description}>{ingredients.join(', ')}</p>
					<div className={styles.price}>{price} $</div>
				</div>
				<div>
					<div className={styles.counter}>
						<div className={styles.count} data-test="product-amount">
							{amount}
						</div>
						<div className={styles.buttons}>
							<Button onClick={decrement} icon="minus" />
							<Button onClick={increment} icon="plus" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Product.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string.isRequired,
		ingredients: PropTypes.array.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
	// from HOC counter
	amount: PropTypes.number,
	decrement: PropTypes.func.isRequired,
	increment: PropTypes.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
	amount: state.order[ownProps.id] || 0,
	product: state.products[ownProps.id],
})

// const mapDispatchToProps = {
// 	decrement,
// 	increment,
// }

const mapDispatchToProps = (dispatch, ownProps) => ({
	decrement: () => dispatch(decrement(ownProps.id)),
	increment: () => dispatch(increment(ownProps.id)),
})
// и тогда можно сделать <button onClick={decrement}>

export default connect(mapStateToProps, mapDispatchToProps)(Product)
