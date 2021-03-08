import React from 'react';
import { BsBatteryFull } from "react-icons/bs";
import { AiFillSignal, AiOutlineWifi } from "react-icons/ai";

import './Layout.styles.scss';

const Layout = ({ children }) => (
  <div className='layout'>
    <div className='bar-info'>
      <span className='bar-info__hour'>9:41</span>
      <div className='bar-info__status'>
        <ul className='bar-info__status--list'>
          <li className='bar-info__status--item'>
            <AiFillSignal />
          </li>
          <li className='bar-info__status--item'>
            <AiOutlineWifi />
          </li>
          <li className='bar-info__status--item'>
            <BsBatteryFull />
          </li>
        </ul>
      </div>
    </div>
    <div className='layout__content'>
      {children}
    </div>
  </div>
);

export default Layout