import React, { useState, useCallback, useEffect } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { BsBookmarkFill } from 'react-icons/bs';

import Header from '../../components/header/Header';
import ListMusic from '../../components/listMusic/ListMusic'
import {playlistData} from './playlist-data'
import './PlayList.styles.scss';

const PlayList = () => {
  const [saved, setSaved] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [itemPlaylistClicked, setItemPlaylistClicked] = useState(0)
  const [clickedExpand, setClickedExpand] = useState(false)
  const [data, setData] = useState([
    {
      id: 1,
      path: 'https://c.pxhere.com/images/8c/e9/e95dc74743a12bde351fcbbc6824-1584769.jpg!d',
      title: 'The power of notes',
      saved: false
    },
    {
      id: 2,
      path: 'https://c.wallhere.com/photos/21/85/leaf_maple_tree_stump_dry-1019902.jpg!d',
      title: 'Learn how to motivated',
      saved: false
    },
    {
      id: 3,
      path: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Some_trees.jpg',
      title: 'How happy life',
      saved: false
    }
  ]);

  useEffect(() => setClicked(prev => !prev), [data]);

  const handleAlbuns = useCallback((id) => {
    setClicked(!clicked)
    const newData = data.filter((_, index) => id !== index)
    setData([data[id], ...newData]);
  }, [clicked, data]);

  const handleSaved = (id) => {
    const copyData = data.filter((_, index) => index === id);
    copyData[0].saved = !copyData[0].saved;
    data[0] = copyData[0];
    setData(data);
    setSaved(!saved);
  }

  const handleClickedItem = (id) => {
    setItemPlaylistClicked(id)
  }

  const handleExpand = () => {
    console.log('expand')
    setClickedExpand(!clickedExpand)
  }
  

  return (
    <>
      <Header 
        title={`${clickedExpand ? 'NOW PLAYING' : 'your playlist'}`}
        action={`${clickedExpand ? 'icon' : 'NEXT'}`}
        expandClicked={handleExpand}
      />

      <section 
        className='cards'
        style={clickedExpand ? {
          display: 'none'    
        } :
        {
          display: 'flex'
        }}
      >
        <div 
          className={`cards__main ${clicked && 'actived-main'}`}
          style={{
            backgroundImage: `url(${data[0].path})`
          }}
        >
          <button
            className={`cards__button`}
            onClick={() => handleSaved(0)}
          >
            <BsBookmarkFill className={`${(data[0].saved) && 'saved-card'}`} />
          </button>
          <span>{data[0].title}</span>
        </div>
        <div className='cards__column'>
          <ul className='cards__list'>
            <li className='cards__item'>
              <div 
                className={`card ${clicked && 'actived'}`}
                style={{
                  backgroundImage: `url(${data[1].path})`
                }}
                onClick={() => handleAlbuns(1)}
              />
            </li>
            <li className='cards__item'>
              <div 
                className={`card ${clicked && 'actived-top'}`}
                style={{
                  backgroundImage: `url(${data[2].path})`
                }}
                onClick={() => handleAlbuns(2)}
              />
            </li>
            <li className='cards__item'>
              <div 
                className='card card__arrow'
                style={{
                  backgroundColor: '#4DA1E0'
                }}
              >
                <RiArrowRightSLine />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ListMusic 
        title='next to play'
        data={playlistData}
        clicked={handleClickedItem}
        itemClicked={itemPlaylistClicked}
        expandClicked={handleExpand}
        clickedExpand={clickedExpand}
      />
    </>
  )
}

export default PlayList;