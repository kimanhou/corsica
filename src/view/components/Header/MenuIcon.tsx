import React from 'react';
import './MenuIcon.scss';

interface IMenuIconProps {
    onClick : () => void;
}

const MenuIcon : React.FC<IMenuIconProps> = props => {
    return (
        <div className={`menu-icon`} onClick={props.onClick}>
            <svg viewBox="0 0 126 66.132293" >
                <g id="layer1" transform="translate(3,3)">
                <path style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="M 0,0 H 100 V 0"
                    id="path10"
                    className={`bar1`}/>
                <path style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="m 20,30.132291 h 100 v 0"
                    id="path10-3"
                    className={`bar2`}/>
                <path style={{
                        fill : 'none',
                        stroke : '#000000',
                        strokeWidth : 4,
                        strokeLinecap : 'round'
                    }}
                    d="m 0,60.132291 h 99.999999 v 0"
                    id="path10-9"
                    className={`bar3`}/>
                </g>
            </svg>
        </div>
    )
}
export default MenuIcon;