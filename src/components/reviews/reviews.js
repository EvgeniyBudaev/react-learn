import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Review from './review'
import styles from './reviews.module.css'
import ReviewForm from './review-form'
import {loadReviews} from '../../redux/actionCreators/actions'

const Reviews = (props) => {
	const {reviews, restaurantId, loadReviews} = props

	useEffect(() => {
		loadReviews(restaurantId)
	}, [loadReviews, restaurantId])

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

export default connect(null, {loadReviews})(Reviews)
