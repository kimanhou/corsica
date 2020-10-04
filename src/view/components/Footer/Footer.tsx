import React from 'react';
import Text from '../LocalisationContext/Text';
import './Footer.scss';
import SocialMediaLink from './SocialMediaLink';

const Footer : React.FunctionComponent = props => {
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
                <h2><Text english={`Home | Itinerary | Practical info | Photos & Videos`} french={`Accueil | Itinéraire | Infos pratiques | Photos & Vidéos`}/></h2>
            </div>
        </div>
      <h3><Text english={`©2020 Website made by Kim Anh Nguyen and Mark Poussard`} french={`©2020 Site web réalisé par Kim Anh Nguyen et Mark Poussard`}/></h3>
    </div>
  )
}
export default Footer;