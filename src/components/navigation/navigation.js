import React from 'react'
import styles from './navigation.module.css';

function Navigation(props) {
  const { restaurants, handleRestaurantClick } = props
  return (
    <div className={styles.list}>
      {restaurants.map(restaurant => (
        <span
          key={restaurant.id}
          className={styles.restaurant}
          onClick={() => handleRestaurantClick(restaurant.id)}
        >
          {restaurant.name}
        </span>
      ))}
    </div>
  )
}

export default Navigation
