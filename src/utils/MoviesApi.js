export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Произошла ошибка со статусом ${response.status}`));
}

export const movies = () => {
  return fetch(`${BASE_URL}/`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
