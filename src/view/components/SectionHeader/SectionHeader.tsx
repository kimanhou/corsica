import React from 'react';
import Text from '../LocalisationContext/Text';
import './SectionHeader.scss';

interface ISectionHeaderProps {
    englishTitle : string;
    frenchTitle : string;
    englishSubtitle : string;
    frenchSubtitle : string;
}

const SectionHeader : React.FunctionComponent<ISectionHeaderProps> = props => {
  return (
    <div className={`section-header`}>
      <h1><Text english={props.englishTitle} french={props.frenchTitle}/></h1>
      <h2><Text english={props.englishSubtitle} french={props.frenchSubtitle}/></h2>
    </div>
  )
}
export default SectionHeader;