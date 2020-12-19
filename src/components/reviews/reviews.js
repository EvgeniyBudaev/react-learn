import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import Review from './review'
import styles from './reviews.module.css'
import ReviewForm from './review-form'
import {loadReviews, loadUsers} from '../../redux/actionCreators/actions'
import {
	reviewsLoadedSelector,
	usersLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader'

const Reviews = (props) => {
	const {
		reviews,
		restaurantId,
		loadReviews,
		loadUsers,
		usersLoaded,
		reviewsLoaded
	} = props

	useEffect(() => {
		loadUsers();
		loadReviews(restaurantId);
	}, [loadUsers, loadReviews, restaurantId]);

	if (!usersLoaded || !reviewsLoaded) return <Loader />;

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

const mapStateToProps = createStructuredSelector({
	reviewsLoaded: reviewsLoadedSelector,
	usersLoaded: usersLoadedSelector,
});

export default connect(mapStateToProps, { loadReviews, loadUsers })(Reviews);
