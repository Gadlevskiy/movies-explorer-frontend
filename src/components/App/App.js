import React from 'react';
import { Redirect, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  const history = useHistory();
  const [isNavigationMenuOpen, setNavigationMenuOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [resultSavedMovies, setResultSavedMovies] = React.useState([]);
  const [currentSize, setCurrentSize] = React.useState(7);
  const [numberOfAdd, setNumberOfAdd] = React.useState(2);
  const [shownMovies, setShownMovies] = React.useState([]);
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);

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
    getSavedMovies();
    getMoviesFromBeat();
    const localSearcResult = JSON.parse(localStorage.getItem('moviesSearchResult'));
    if (localSearcResult) {
      setSearchedMovies(localSearcResult);
    }
  }, [loggedIn]);
  // Блок логики вывода начальных карточек и подгрузки новых через кнопку "Ещё"
  React.useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  });

  React.useEffect(() => {
    const windowRes = window.innerWidth;
    const list = countCurrenSize(windowRes);
    const countMovies = Math.min(searchedMovies.length, list.start);
    setShownMovies(searchedMovies.slice(0, countMovies));
    setCurrentSize(countMovies);
    setNumberOfAdd(list.add);
  }, [searchedMovies]);

  function countCurrenSize(windowRes) {
    if (windowRes >= 1280) {
      return { start: 12, add: 3 };
    } else if (1280 > windowRes && windowRes > 768) {
      return { start: 8, add: 2 };
    } else {
      return { start: 7, add: 2 };
    }
  }

  function handleResizeWindow() {
    const windowRes = window.innerWidth;
    const list = countCurrenSize(windowRes);
    setNumberOfAdd(list.add);
  }

  function renderCrads() {
    const countMovies = Math.min(searchedMovies.length, currentSize + numberOfAdd);
    setShownMovies([...shownMovies, ...searchedMovies.slice(currentSize, countMovies)]);
    setCurrentSize(countMovies);
  }
  // Блок логина и регистрации
  function handleRegisterSubmit(e, data) {
    e.preventDefault();
    mainApi
      .register(data)
      .then(() => {
        mainApi
          .login(data)
          .then((res) => {
            if (res.token) {
              setLoggedIn(true);
              history.push('/movies');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLoginSubmit(e, data) {
    e.preventDefault();
    mainApi
      .login(data)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem('moviesSearchResult');
        setSavedMovies([]);
        setResultSavedMovies([]);
        setMovies([]);
        setSearchedMovies([]);
        setShownMovies([]);
        setCurrentUser({});
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfile(e, data) {
    e.preventDefault();
    mainApi.editProfile(data).then((user) => {
      setCurrentUser(user);
    });
  }

  // Блок отвечает за логику открытия "бургер" меню
  function handleNavigationMenuClick() {
    setNavigationMenuOpen(true);
  }

  function closeNavigationMenu() {
    setNavigationMenuOpen(false);
  }
  // Блок логики запроса фильмов с сервера и их форматирование
  function getMoviesFromBeat() {
    setIsPreloaderActive(true);
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
        setMovies(formatedData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderActive(false);
      });
  }

  function getSavedMovies() {
    setIsPreloaderActive(true);
    mainApi
      .getInitialCards()
      .then((data) => {
        setSavedMovies(data);
        setResultSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderActive(false);
      });
  }
  // Блок логики фильтрации массива с фильмами по запросу
  function search(data, searchValue, isShort) {
    const result = data.filter((movie) => {
      if (isShort) {
        return (
          (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchValue.toLowerCase())) &&
          movie.duration < 40
        );
      } else {
        return (
          movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    });
    return result;
  }

  function handleMoviesButtonSearch(searchValue, isShort) {
    const searcResult = search(movies, searchValue, isShort);
    setSearchedMovies(searcResult);
    localStorage.setItem('moviesSearchResult', JSON.stringify(searcResult));
  }

  function handleSavedMoviesButtonSearch(searchValue, isShort) {
    setResultSavedMovies(search(savedMovies, searchValue, isShort));
  }

  function checkIsLikedMovie(movie) {
    return savedMovies.some((el) => el.movieId === movie.movieId);
  }

  function handleAddMovie(data) {
    mainApi
      .saveCard(data)
      .then((res) => {
        setSavedMovies([...savedMovies, res]);
        setResultSavedMovies([...resultSavedMovies, res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRemoveMovie(id) {
    mainApi
      .deleteCard(id)
      .then(() => {
        if (resultSavedMovies) {
          setResultSavedMovies(resultSavedMovies.filter((el) => el.movieId !== id));
          setSavedMovies(savedMovies.filter((el) => el.movieId !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route path='/' exact>
            <Main
              location={location.pathname}
              onMenuClick={handleNavigationMenuClick}
              loggedIn={loggedIn}
            />
          </Route>
          <Route path='/signup'>
            {loggedIn ? <Redirect to='/movies' /> : <Register onRegister={handleRegisterSubmit} />}
          </Route>
          <Route path='/signin'>
            {loggedIn ? <Redirect to='/movies' /> : <Login onLogin={handleLoginSubmit} />}
          </Route>
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
            component={Movies}
            location={location.pathname}
            onMenuClick={handleNavigationMenuClick}
            isNeedBtnMore={searchedMovies.length > shownMovies.length}
            movies={shownMovies}
            likedMovies={checkIsLikedMovie}
            onClick={handleMoviesButtonSearch}
            onRenderClick={renderCrads}
            onBtnSave={handleAddMovie}
            onBtnDelete={handleRemoveMovie}
            handlePreloader={isPreloaderActive}
          />
          <ProtectedRoute
            path='/saved-movies'
            loggedIn={loggedIn}
            component={SavedMovies}
            location={location.pathname}
            onMenuClick={handleNavigationMenuClick}
            movies={resultSavedMovies}
            onClick={handleSavedMoviesButtonSearch}
            onBtnDelete={handleRemoveMovie}
            handlePreloader={isPreloaderActive}
          />
          <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            location={location.pathname}
            onMenuClick={handleNavigationMenuClick}
            onLogout={handleLogout}
            onFormSubmit={handleEditProfile}
          />
          <Route path='*'>
            <LostPage />
          </Route>
        </Switch>
        <Footer></Footer>
        <Navigation isOpen={isNavigationMenuOpen} onClose={closeNavigationMenu}></Navigation>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
