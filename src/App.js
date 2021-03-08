import './App.styles.scss';
import { 
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Playing from './pages/playing/Playing';
import PlayList from './pages/playList/PlayList';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Layout>
          <Switch>
            <Route path='/' exact component={PlayList} />
            <Route path='/play' component={Playing} />
            <Redirect exact to='/' />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
