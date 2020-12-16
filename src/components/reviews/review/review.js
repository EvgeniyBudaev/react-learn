import React from 'react'
import PropTypes from 'prop-types'

import Rate from '../../rate'
import styles from './review.module.css'

const Review = (props) => {
	const {user, text, rating} = props

	return (
		<div className={styles.review} data-test="review">
			<div className={styles.content}>
				<div>
					<h4 className={styles.name} data-test="review-user">
						{user}
					</h4>
					<p className={styles.comment} data-test="review-text">
						{text}
					</p>
				</div>
				<div className={styles.rate}>
					<Rate value={rating} />
				</div>
			</div>
		</div>
	)
}

Review.propTypes = {
	user: PropTypes.string,
	text: PropTypes.string,
	rating: PropTypes.number.isRequired,
}

Review.defaultProps = {
	user: 'Anonymous',
}

export default Review
