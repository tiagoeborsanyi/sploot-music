import React, { useState, useCallback, useEffect } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { BsBookmarkFill } from 'react-icons/bs';

import Header from '../../components/header/Header';
import './PlayList.styles.scss';

const PlayList = () => {
  const [clicked, setClicked] = useState(false)
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
  

  return (
    <>
      <Header 
        title='your playlist'
        action='text'
      />

      <section className='cards'>
        <div 
          className={`cards__main ${clicked && 'actived-main'}`}
          style={{
            backgroundImage: `url(${data[0].path})`
          }}
        >
          <BsBookmarkFill />
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

    </>
  )
}

export default PlayList;