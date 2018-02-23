import mapKeys from 'lodash.mapkeys';

import { LIST_TAGS } from '../actions';

export default function tags(state = {}, action) {
  switch (action.type) {
    case LIST_TAGS:
      return mapKeys(action.tags, 'id');
    default:
      return state;
  };
};
