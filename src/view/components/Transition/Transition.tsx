import React from 'react';
import './Transition.scss';

interface ITransitionProps {
    classname : string;
    imageSrc : string;
}

const Transition : React.FC<ITransitionProps> = props => {
    return(
        <div className={`transition ${props.classname}`} style={{ backgroundImage: `url('${props.imageSrc}')`}}>
            {/* <img src={props.imageSrc} /> */}
        </div>
    );
}

export default Transition;