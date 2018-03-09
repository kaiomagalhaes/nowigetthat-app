import { createSelector } from 'reselect';
import { List } from 'immutable';

const selector = state => state.get('knowledgePieces');
const list = results => List(results.toArray());

export default createSelector(
  selector,
  list,
);
