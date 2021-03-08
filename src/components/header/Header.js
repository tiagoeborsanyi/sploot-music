import React from 'react';
import { 
  RiArrowLeftSLine,
  RiMore2Fill
} from 'react-icons/ri';

import './Header.styles.scss';

const Header = ({ title, action }) => (
  <div className='header'>
    <RiArrowLeftSLine className='header__svg' />
    <h3 className='header__title'>{title}</h3>
    <h3 className='header__action'>{action === 'icon' ? <RiMore2Fill /> : 'next' }</h3>
  </div>
);

export default Header;