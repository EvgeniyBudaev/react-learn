import React from 'react'
import PropTypes from 'prop-types'

import Star from './star'

const Rate = (props) => {
	const {value} = props

	return (
		<div>
			{[...Array(5)].map((_, i) => (
				<Star key={i} checked={i <= value - 1} />
			))}
		</div>
	)
}

Star.propTypes = {
	checked: PropTypes.bool.isRequired,
}

export default Rate
