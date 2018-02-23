import mapKeys from 'lodash.mapkeys';
import { List, Map } from 'immutable';

import { LIST_TAGS } from '../actions';

export default function tags(state = Map({}), action) {
  switch (action.type) {
    case LIST_TAGS:
      return state.merge(mapKeys(action.tags, 'id'));
    default:
      return state;
  };
};
