import React from 'react'
import counter from "../../hocs/counter";
import Plus from "../plus";
import Minus from "../minus";
import styles from './product.module.css';

function Product(props) {
	const {product, amount, decrement, increment} = props

	return (
		<div className={styles.product}>
			<div className={styles.content}>
				<div>
					<h4 className={styles.title}>{product.name}</h4>
					<p className={styles.description}>{product.ingredients.join(', ')}</p>
					<div className={styles.price}>{product.price} $</div>
				</div>
				<div>
					<div className={styles.counter}>
						<div className={styles.count}>{amount}</div>
						<div className={styles.buttons}>
							<button className={styles.button} onClick={decrement}>
								<Minus />
							</button>
							<button className={styles.button} onClick={increment}>
								<Plus />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default counter(Product)
