import './App.css';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
// import Header from '../Header';

function App() {
  return (
    <div className='page'>
      {/* <Header></Header> */}
      <Switch>
        <Main></Main>
      </Switch>
    </div>
  );
}

export default App;
