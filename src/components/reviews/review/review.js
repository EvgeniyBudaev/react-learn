import React from 'react'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import Rate from '../../rate'
import styles from './review.module.css'
import { reviewWitUserSelector } from '../../../redux/selectors';

const Review = ({ review: { user = 'Anonymous', text, rating } }) => {

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
	review: PropTypes.shape({
		user: PropTypes.string,
		text: PropTypes.string,
		rating: PropTypes.number.isRequired,
	}),
}

// Review.defaultProps = {
// 	user: 'Anonymous',
// }

export default connect(
	createStructuredSelector({
		review: reviewWitUserSelector,
	})
)(Review);