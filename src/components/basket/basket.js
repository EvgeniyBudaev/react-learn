import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {Link} from 'react-router-dom'

import styles from './basket.module.css'
import BasketRow from './basket-row'
import BasketItem from './basket-item'
import Button from '../UI/button'
import {orderProductsSelector, totalSelector} from '../../redux/selectors'

function Basket({title = 'Basket', total, orderProducts}) {
	if (!total) {
		return (
			<div className={styles.basket}>
				<h4 className={styles.title}>Select a meal from the list</h4>
			</div>
		)
	}

	return (
		<div className={styles.basket}>
			<h4 className={styles.title}>{title}</h4>
			{orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
				<BasketItem
					product={product}
					amount={amount}
					key={product.id}
					subtotal={subtotal}
					restaurantId={restaurantId}
				/>
			))}
			<hr className={styles.hr} />
			<BasketRow label="Sub-total" content={`${total} $`} />
			<BasketRow label="Delivery costs:" content="FREE" />
			<BasketRow label="total" content={`${total} $`} bold />
			<Link to="/checkout">
				<Button primary block>
					checkout
				</Button>
			</Link>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	total: totalSelector,
	orderProducts: orderProductsSelector,
});

export default connect(mapStateToProps)(Basket);

// selector это функция, которая достает какие-то данные со store и меняет эти данные или не меняет. Все эти вычисления
// необходимо мемоизировать с помощью библиотеки reselect. Reselect - общепринятый стандарт в redux.
