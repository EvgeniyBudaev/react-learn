import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
// import counter from '../../hocs/counter'
import styles from './product.module.css'
import {decrement, increment} from '../../redux/actionCreators/actions'
import { productAmountSelector, productSelector } from '../../redux/selectors'
import Button from '../UI/button'

const Product = ({ product, amount = 0, increment, decrement }) => {
	if (!product) return null;

	return (
		<div className={styles.product} data-test="product">
			<div className={styles.content}>
				<div>
					<h4 className={styles.title}>{product.name}</h4>
					<p className={styles.description}>{product.ingredients.join(', ')}</p>
					<div className={styles.price}>{product.price} $</div>
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
	}),
	// from HOC counter
	amount: PropTypes.number,
	decrement: PropTypes.func.isRequired,
	increment: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
	amount: productAmountSelector,
	product: productSelector,
});

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
