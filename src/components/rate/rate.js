import React from 'react';

import Star from './star';

const Rate = (props) => {
  const {value} = props
  
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <Star key={i} checked={i <= value - 1} />
      ))}
    </div>
  );
}

export default Rate;
