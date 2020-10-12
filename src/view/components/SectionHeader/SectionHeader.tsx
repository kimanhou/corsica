import React from 'react';
import { Page } from '../../../App';
import { myScrollTo } from '../../../Util';
import Text from '../LocalisationContext/Text';
import './SectionHeader.scss';

interface ISectionHeaderProps {
    englishTitle : string;
    frenchTitle : string;
    englishSubtitle : string;
    frenchSubtitle : string;
    setCurrentPage ?: (currentPage : Page) => void;
    page ?: Page;
}

const SectionHeader : React.FunctionComponent<ISectionHeaderProps> = props => {
  var cursorPointerClassname = (props.setCurrentPage !== undefined && props.page !== undefined) ? "clickable" : "";
  const onClick = () => {
    if (props.setCurrentPage !== undefined && props.page !== undefined) {
      props.setCurrentPage(props.page);
      myScrollTo("header");
    }
    else {
      return {};
    }
  }
  return (
    <div className={`section-header ${cursorPointerClassname}`} onClick={onClick}>
      <h1><Text english={props.englishTitle} french={props.frenchTitle}/></h1>
      {props.englishSubtitle !== "" && props.frenchSubtitle !== "" &&
        <h2><Text english={props.englishSubtitle} french={props.frenchSubtitle}/></h2>
      }
    </div>
  )
}
export default SectionHeader;