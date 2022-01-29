import React from 'react';
import '../component/component.css';
import Rating from '../component/Rating';


function RatingBox(props) {
  return (
        <div style={props.marginleft} className='rating-box'>
            <div className='rating-component'>
                <Rating />
                <h1>Rated 5 stars in {props.name}</h1>
            </div>
        </div>
    );
}

export default RatingBox;
