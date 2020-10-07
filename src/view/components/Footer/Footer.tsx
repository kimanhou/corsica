import React from 'react';
import { Page } from '../../../App';
import Text from '../LocalisationContext/Text';
import './Footer.scss';
import SocialMediaLink from './SocialMediaLink';

interface IFooterProps {
  setCurrentPage : (currentPage : Page) => void;
}

const Footer : React.FunctionComponent<IFooterProps> = props => {
const onClickMenu = (page : Page) => {
  props.setCurrentPage(page);
}

  return (
    <div className={`footer`} id={`footer`}>
        <div className={`grey`}>
            <div className={`left`}>
                <h1><Text english={`Contact us`} french={`Nous contacter`}/></h1>
                <div className={`social-media`}>
                  <SocialMediaLink link="mailto:mark.kimanh@gmail.com" iconUrl="icons/mail.png"/>
                  <SocialMediaLink link="https://www.instagram.com/kimanhou/" iconUrl="icons/instagram.png"/>
                  <SocialMediaLink link="https://www.linkedin.com/in/kanguyenlu/" iconUrl="icons/linkedin.png"/>
                  <SocialMediaLink link="https://github.com/kimanhou" iconUrl="icons/github.png"/>
                </div>
            </div>
            <div className={`right`}>
                <h2 onClick={() => onClickMenu(Page.home)}><Text english={`Home`} french={`Accueil`}/></h2>
                <h2 className={`divider`}> | </h2>
                <h2 onClick={() => onClickMenu(Page.itinerary)}><Text english={`Itinerary`} french={`Itinéraire`}/></h2>
                <h2 className={`divider`}> | </h2>
                <h2 onClick={() => onClickMenu(Page.infos)}><Text english={`Practical info`} french={`Infos pratiques`}/></h2>
                <h2 className={`divider`}> | </h2>
                <h2 onClick={() => onClickMenu(Page.photos)}><Text english={`Photos & Videos`} french={`Photos & Vidéos`}/></h2>
            </div>
        </div>
      <h3><Text english={`©2020 Website made by Kim Anh Nguyen and Mark Poussard`} french={`©2020 Site web réalisé par Kim Anh Nguyen et Mark Poussard`}/></h3>
    </div>
  )
}
export default Footer;