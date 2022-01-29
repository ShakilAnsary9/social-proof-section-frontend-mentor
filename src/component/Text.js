import React from 'react';
import '../component/component.css';
import Anne from '../images/image-anne.jpg';
import Colton from '../images/image-colton.jpg';
import Irene from '../images/image-irene.jpg';
import Card from './Card';
import RatingBox from './RatingBox';

function Text() {

    return(
        <>
        <div className='container'>
            <div className='text-section'>
                <h1>10,000+ of our <br />users love our <br /> products.</h1>
                    <p>We only provide great products combined with excellent <br /> customer service.
                    See what our satisfied customers are <br /> saying about our services.</p>
            </div>
            <div className='rating-flex'>
                <RatingBox marginleft={{marginLeft: "100px"}} name={'Reviews'}></RatingBox>
                <RatingBox marginleft={{marginLeft: "150px"}} name={'Report Guru'}></RatingBox>
                <RatingBox marginleft={{marginLeft: "200px"}} name={'BestTech'}></RatingBox>
            </div>
        </div>
        <div className='card-section'>
            <div className='main-flex'>
                <Card name={'Colton Smith'} avtar={{ backgroundImage:`url(${Colton})` }} margintop={{ marginTop: "20px" }} para={'"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'} />
                <Card name={'Irene Roberts '} avtar={{ backgroundImage:`url(${Irene})` }} margintop={{ marginTop: "60px" }} para={'"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'} />
                <Card name={'Anne Wallace'} avtar={{ backgroundImage:`url(${Anne})` }} margintop={{ marginTop: "100px" }} para={'"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'} />
            </div>
        </div>
        </>
    );
}
export default Text;