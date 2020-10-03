import React from 'react';
import './CrossIcon.scss';

interface ICrossIconProps {
    onClick : () => void;
}

const CrossIcon : React.FC<ICrossIconProps> = props => {
    return(
        <svg viewBox="0 0 126 66.132293" className={`cross-icon`} onClick={props.onClick}>
            <g
                id="layer1"
                transform="translate(3,3)">
                <path
                    style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="m 0,0 100,60 v 0"
                    id="path10"
                    className={`bar1`} />
                <path
                    style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="M 0,60 100,0 v 0"
                    id="path10-9"
                    className={`bar2`} />
            </g>
        </svg>
    );
}

export default CrossIcon;