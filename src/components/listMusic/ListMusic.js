import React from 'react'
import { 
  BsPlayFill,
  BsSkipStartFill,
  BsSkipEndFill,
  BsFullscreen
 } from "react-icons/bs";

import './ListMusic.styles.scss'
import './player.styles.scss'

const ListMusic = ({ title, data, clicked, itemClicked }) => (
  <section className='playlist'>
    <div className='playlist__left'>
      <h3 className='playlist__title'>{title}</h3>
      <div className='playlist__items'>
        {
          data.map((item, index) => (
            <div 
              className='playlist__item' 
              key={item.id}
              onClick={() => clicked(index)}
            >
              <div 
                className='playlist__image'
                style={{
                  backgroundImage: `url(${item.pathImg})`
                }}
              ><span>{item.id}</span></div>
              <div className='playlist__text'>
                <h4>{item.title}</h4>
                <span>{item.info}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div className='playlist__right'>
      <div 
        className='playlist__image right_image'
        style={{
          backgroundImage: `url(${data[itemClicked].pathImg ? data[itemClicked].pathImg : data[0].pathImg})`
        }}
      >
        <span>{data[itemClicked].id ? data[itemClicked].id : data[0].id}</span>
      </div>
      <div className='player'>
        <div className='player__range' />
        <BsSkipStartFill />
        <BsPlayFill />
        <BsSkipEndFill />
      </div>
      <div className='expand'>
        <BsFullscreen />
      </div>
    </div>
  </section>
)

export default ListMusic