export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

function checkResponse(response) {
  try {
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    return e;
  }
}

export const movies = () => {
  return fetch(`${BASE_URL}/`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
