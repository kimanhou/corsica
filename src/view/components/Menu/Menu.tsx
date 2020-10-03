import React from 'react';
import { Page } from '../../../App';
import CrossIcon from './CrossIcon';
import './Menu.scss';
import MenuLink from './MenuLink';

interface IMenuProps {
    activeLink : string;
    isVisible : boolean;
    setMenuVisible : (isMenuVisible : boolean) => void;
    currentPage : Page;
    setCurrentPage : (currentPage : Page) => void;
}

const Menu : React.FC<IMenuProps> = props => {
    var isVisibleClassname = props.isVisible ? "visible" : "";
    const onClick = (page : Page) => {
        props.setCurrentPage(page);
        props.setMenuVisible(!props.isVisible);
    }

    return(
        <div className={`menu ${isVisibleClassname}`}>
            <div className={`left`}>
                <h1>Menu</h1>
                <h2>Navigation</h2>
                <div className={`menu-links`}>
                    <MenuLink isActive={props.currentPage == Page.home} name={`Accueil`} onClick={() => onClick(Page.home)} />
                    <MenuLink isActive={props.currentPage == Page.itinerary} name={`Itinéraire`} onClick={() => onClick(Page.itinerary)} />
                    <MenuLink isActive={props.currentPage == Page.infos} name={`Infos pratiques`} onClick={() => onClick(Page.infos)} />
                    <MenuLink isActive={props.currentPage == Page.photos} name={`Photos & vidéos`} onClick={() => onClick(Page.photos)} />
                    <MenuLink isActive={props.currentPage == Page.home} name={`Contact`} onClick={() => onClick(Page.home)} />
                </div>
            </div>
            <div className={`right`}>
                <img src="./photos/menu/menu.jpg"/>
                <CrossIcon onClick={() => props.setMenuVisible(!props.isVisible)}/>
            </div>
        </div>
    );
}

export default Menu;