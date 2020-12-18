import React from 'react'
import PropTypes from 'prop-types'
import Product from '../product'
import Basket from '../basket'

import styles from './menu.module.css'

function Menu(props) {
	const {menu} = props

	return (
		<div className={styles.menu}>
			<div>
				{menu.map((id) => (
					<Product key={id} id={id} />
				))}
			</div>
			<div>
				<Basket />
			</div>
		</div>
	)
}

Menu.propTypes = {
	menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Menu
