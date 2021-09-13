import './App.css';
import { Route, Switch } from 'react-router-dom';
// import Main from '../Main/Main';
// import Header from '../Header/Header';
import Movies from '../Movies/Movies'

function App() {
  return (
    <div className='page'>
      {/* <Header></Header> */}
      <Switch>
        <Route exact path='/'>
          {/* <Main></Main> */}
          <Movies></Movies>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
