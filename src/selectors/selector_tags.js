import { createSelector } from 'reselect';

const selector = state => state.tags;
const list = results => Object.values(results);

export default createSelector(
  selector,
  list,
);
