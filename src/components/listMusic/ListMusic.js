import React from 'react'
import { 
  BsPlayFill,
  BsSkipStartFill,
  BsSkipEndFill,
  BsFullscreen,
  BsArrowRepeat,
  BsFillHeartFill,
  BsShuffle,
  BsFullscreenExit
 } from "react-icons/bs";
 import { VscSettings } from 'react-icons/vsc'

import './ListMusic.styles.scss'
import './player.styles.scss'
import './expanded.styles.scss'

const ListMusic = ({ 
  title, 
  data, 
  clicked, 
  itemClicked,
  expandClicked,
  clickedExpand
}) => (
  <section 
    className='playlist'
    style={clickedExpand ? 
    {
      height: '90%',
      flexDirection: 'column'
    } : 
    {
      
    }}
  >
    <div 
      className='playlist__left'
      style={!clickedExpand ? 
      {
        display: 'block'
      } : 
      {
        display: 'none'
      }}
    >
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
              <div className={`playlist__text ${itemClicked === index && 'selected-item'}`}>
                <h4>{item.title}</h4>
                <span>{item.info}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <div 
      className='playlist__right' 
      style={clickedExpand ?
      {
        alignItems: 'center',
        margin: 0
      } : {}}
    >
      <div 
        className={`${!clickedExpand ? 'playlist__image right_image' : 'playlist__image expand__image'}`}
        style={{
          backgroundImage: `url(${data[itemClicked].pathImg ? data[itemClicked].pathImg : data[0].pathImg})`
        }}
      >
        {
          !clickedExpand ?
          <span>{data[itemClicked].id ? data[itemClicked].id : data[0].id}</span> :
          null
        }
      </div>
      <div 
        className='player'
        style={!clickedExpand ? 
          {
            display: 'flex'
          } : 
          {
            display: 'none'
          }}
      >
        <div className='player__range' />
        <BsSkipStartFill />
        <BsPlayFill />
        <BsSkipEndFill />
      </div>
      <div className='expand'>
        {
          clickedExpand ?
          <BsFullscreenExit onClick={expandClicked} /> :
          <BsFullscreen 
            onClick={expandClicked}
          />
        }
        
      </div>

      {
        clickedExpand ?
        (
          <div className='expanded'>
            <h2 className='expanded__title'>{data[itemClicked].title}</h2>
            <span className='expanded__info'>{data[itemClicked].info}</span>
            <div className='expanded__options'>
              <BsShuffle />
              <BsFillHeartFill />
              <BsArrowRepeat />
            </div>
            <div className='expanded__player'>
              <div className='expanded__time'>
                <span>1:25</span>
                <span>4:25</span>
              </div>
              <div className='expanded__player--range' />
              <div className='expanded__controls'>
                <BsSkipStartFill />
                <BsPlayFill className='expanded__controls--play' />
                <BsSkipEndFill />
              </div>
              <div className='expanded__controls--settings'>
                <VscSettings />
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  </section>
)

export default ListMusic