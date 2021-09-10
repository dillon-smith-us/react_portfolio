import React from 'react';

import Cardinfo from '../components/Cardinfo';

function Card(props) {

    return(
        <div className="d-inline-block d-card">
            <img className="d-card-image" src={props.item.imgSrc} alt={props.item.imgSrcs} />
            { props.item.selected && <Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />}
        </div>
    );

}

export default Card;