import React from 'react';
import './MenuLink.scss';

interface IMenuLinkProps {
    isActive : boolean;
    name : string;
    onClick : () => void;
}

const MenuLink : React.FC<IMenuLinkProps> = props => {
    var activeClassname = props.isActive ? "active" : "";
    return(
        <div className={`menu-link ${activeClassname}`} onClick={props.onClick}>
            <p>{props.name}</p>
            <div className={`underline ${activeClassname}`}></div>
        </div>
    );
}

export default MenuLink;