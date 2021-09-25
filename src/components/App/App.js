import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import LostPage from '../LostPage/LostPage';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import mainApi from '../../utils/MainApi';
import * as moviesApi from '../../utils/MoviesApi';

function App() {
  const location = useLocation();
  const [isNavigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);

  React.useEffect(() => {
    mainApi
      .checkProfile()
      .then((author) => {
        setLoggedIn(true);
        setCurrentUser(author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    if (localMovies) {
      setMovies(localMovies);
      const localSearcResult = JSON.parse(localStorage.getItem('moviesSearchResult'));
      if (localSearcResult) {
        setSearchedMovies(localSearcResult);
      }
    } else {
      getMoviesFromBeat();
    }
  }, []);

  function handleNavigationMenuClick() {
    setNavigationMenuOpen(true);
  }

  function closeNavigationMenu() {
    setNavigationMenuOpen(false);
  }

  function getMoviesFromBeat() {
    moviesApi
      .movies()
      .then((data) => {
        const formatedData = data.map((item) => {
          return {
            country: item.country ? item.country : 'none',
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: `https://api.nomoreparties.co${item.image.url}`,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN ? item.nameEN : item.nameRU,
          };
        });
        localStorage.setItem('movies', JSON.stringify(formatedData));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedMovies() {
    mainApi
      .getInitialCards()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function search(data, searchValue) {
    const result = data.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    return result;
  }

  function handleMoviesButtonSearch(searchValue, isShort) {
    getMoviesFromBeat();
    localStorage.removeItem('movies')
    setSearchedMovies(
      search(movies, searchValue).filter((item) => {
        return isShort ? item.duration > 80 : true;
      })
    );
  }

  function handleSavedMoviesButtonSearch(searchValue, isShort) {
    search(savedMovies, searchValue, isShort);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header location={location.pathname} onMenuClick={handleNavigationMenuClick} />
        <Switch>
          <Route path='/' exact>
            <Main></Main>
          </Route>
          <Route path='/movies'>
            <Movies movies={searchedMovies} onClick={handleMoviesButtonSearch}></Movies>
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies movies={savedMovies} onClick={handleSavedMoviesButtonSearch}></SavedMovies>
          </Route>
          <Route path='/profile'>
            <Profile></Profile>
          </Route>
          <Route path='/signup'>{loggedIn ? <Redirect to='/' /> : <Register />}</Route>
          <Route path='/signin'>{loggedIn ? <Redirect to='/' /> : <Login />}</Route>
          <Route path='*'>
            <LostPage></LostPage>
          </Route>
        </Switch>
        <Footer></Footer>
        <Navigation isOpen={isNavigationMenuOpen} onClose={closeNavigationMenu}></Navigation>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
