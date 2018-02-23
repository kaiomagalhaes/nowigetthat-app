export const LIST_TAGS = 'LIST_TAGS';

function url() {
  return 'https://api.myjson.com/bins/11df0l';
}

export function fetchTags() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch({ type: LIST_TAGS, tags: json.tags }));
  };
}
