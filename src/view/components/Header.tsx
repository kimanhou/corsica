import React from 'react';
import './Header.scss';

const Header : React.FunctionComponent = props => {
  return (
    <div className={`header`}>
      <h1>La Corse</h1>
      <h2>by Maki</h2>
    </div>
  )
}
export default Header;