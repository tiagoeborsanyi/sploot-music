import React from 'react';
import { 
  RiArrowLeftSLine,
  RiMore2Fill
} from 'react-icons/ri';

import './Header.styles.scss';

const Header = ({ title, action, expandClicked }) => (
  <div className='header'>
    {action !== 'icon' ? <div style={{width: '0px', marginRight: '0rem'}} /> : <RiArrowLeftSLine className='header__svg' onClick={expandClicked} />}
    <h3 className='header__title'>{title}</h3>
    <h3 className='header__action'>{action === 'icon' ? <RiMore2Fill /> : 'next' }</h3>
  </div>
);

export default Header;