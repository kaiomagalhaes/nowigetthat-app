import mapKeys from 'lodash.mapkeys';
import { Map } from 'immutable';

import { LIST_KNOWLEDGE_PIECES } from '../actions';

export default function tags(state = Map({}), action) {
  switch (action.type) {
    case LIST_KNOWLEDGE_PIECES:
      return state.merge(mapKeys(action.knowledgePieces, 'id'));
    default:
      return state;
  }
}
