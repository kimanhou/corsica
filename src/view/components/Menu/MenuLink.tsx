import React from 'react';
import Text from '../LocalisationContext/Text';
import './MenuLink.scss';

interface IMenuLinkProps {
    isActive : boolean;
    englishName : string;
    frenchName : string;
    onClick : () => void;
}

const MenuLink : React.FC<IMenuLinkProps> = props => {
    var activeClassname = props.isActive ? "active" : "";
    return(
        <div className={`menu-link ${activeClassname}`} onClick={props.onClick}>
            <p><Text english={props.englishName} french={props.frenchName}/></p>
            <div className={`underline ${activeClassname}`}></div>
        </div>
    );
}

export default MenuLink;