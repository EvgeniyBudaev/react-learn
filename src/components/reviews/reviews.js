import React from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import styles from './reviews.module.css'
import ReviewForm from './review-form'

const Reviews = (props) => {
	const {reviews, restaurantId} = props

	return (
		<div className={styles.reviews}>
			{reviews.map((id) => (
				<Review key={id} id={id} />
			))}
			<ReviewForm restaurantId={restaurantId} />
		</div>
	)
}

Reviews.propTypes = {
	restaurantId: PropTypes.string.isRequired,
	reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
}

export default Reviews
