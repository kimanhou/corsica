import React from 'react';
import './SocialMediaLink.scss';

interface IScocialMediaLink {
  link : string;
  iconUrl : string;
}

const SocialMediaLink : React.FC<IScocialMediaLink> = props => {
  return (
    <div className={`social-media-link`}>
      <a href={props.link}><img src={props.iconUrl}/></a>
    </div>
  )
}
export default SocialMediaLink;