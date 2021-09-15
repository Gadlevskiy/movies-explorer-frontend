import { Route, Switch } from 'react-router-dom';
// import Main from '../Main/Main';
// import Header from '../Header/Header';
// import Movies from '../Movies/Movies'
// import SavedMovies from '../SavedMovies/SavedMovies'
// import Profile from '../Profile/Profile';
// import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className='page'>
      {/* <Header></Header> */}
      <Switch>
        <Route exact path='/'>
          {/* <Main></Main> */}
          {/* <Movies></Movies>
          <SavedMovies></SavedMovies> */}
          {/* <Profile></Profile> */}
          {/* <Register></Register> */}
          <Login></Login>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
