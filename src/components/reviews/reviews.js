import React from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import styles from './reviews.module.css'
import ReviewForm from './review-form'

const Reviews = (props) => {
	const {reviews} = props

	return (
		<div className={styles.reviews}>
			{reviews.map((review) => (
				<Review key={review.id} {...review} />
			))}
			<ReviewForm />
		</div>
	)
}

Reviews.propTypes = {
	reviews: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
}

export default Reviews
