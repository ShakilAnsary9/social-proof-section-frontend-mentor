import React from 'react';
import '../component/component.css';

function Card(props) {
  return (
    <div className='card-body' style={props.margintop}>
      <div className='card-flex'>
        <div className='avtar' style={props.avtar}></div>
        <div className='text'>{props.name}<br /><span>Verified Buyer</span></div>
      </div>
      <p>{props.para}</p>
    </div>
   );
}

export default Card;
