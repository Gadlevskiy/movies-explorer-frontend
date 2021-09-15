import { Route, Switch, useLocation } from 'react-router-dom';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import LostPage from '../LostPage/LostPage';
import Footer from '../Footer/Footer';

function App() {
  const location = useLocation();

  return (
    <div className='page'>
      <Header location={location.pathname} />
      <Switch>
        <Route path='/' exact>
          <Main></Main>
        </Route>
        <Route path='/movies'>
          <Movies></Movies>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies></SavedMovies>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/signup'>
          <Register></Register>
        </Route>
        <Route path='/signin'>
          <Login></Login>
        </Route>
        <Route path='*'>
          <LostPage></LostPage>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
