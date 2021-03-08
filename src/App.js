import './App.styles.scss';
import { BsBatteryFull } from "react-icons/bs";
import { AiFillSignal, AiOutlineWifi } from "react-icons/ai";

function App() {
  return (
    <div className="app">
      <div className='app__container'>
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
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
