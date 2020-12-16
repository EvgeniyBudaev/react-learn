import React from 'react'
import PropTypes from 'prop-types'
import counter from '../../hocs/counter'
import Plus from '../plus'
import Minus from '../minus'
import styles from './product.module.css'

function Product(props) {
	const {product, amount, decrement, increment} = props

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
							<button
								className={styles.button}
								onClick={decrement}
								data-test="product-decrement"
							>
								<Minus />
							</button>
							<button
								className={styles.button}
								onClick={increment}
								data-test="product-increment"
							>
								<Plus />
							</button>
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
	amount: PropTypes.number.isRequired,
	decrement: PropTypes.func.isRequired,
	increment: PropTypes.func.isRequired,
}

export default counter(Product)
