import React from 'react';
import './CarDetail.scss';

interface ICarDetailProps {
    text : React.ReactNode;
    iconSrc : string;
}

const CarDetail : React.FC<ICarDetailProps> = props => {
    return(
        <div className={`car-detail`}>
            <div className={`image-container`}>
                <img src={props.iconSrc}/>
            </div>
            <div className={`middle`}></div>
            <div className={`text-container`}>
                {props.text}
            </div>
        </div>
    );
}

export default CarDetail;