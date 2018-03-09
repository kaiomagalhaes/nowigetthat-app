export const LIST_KNOWLEDGE_PIECES = 'LIST_KNOWLEDGE_PIECES';

function url() {
  return 'http://api.jsonbin.io/b/5aa318407417a517644f210e/1';
}

export function fetchKnowledgePieces() {
  return dispatch => fetch(url(), {
    method: 'GET',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .then(json => dispatch({ type: LIST_KNOWLEDGE_PIECES, knowledgePieces: json }));
}
