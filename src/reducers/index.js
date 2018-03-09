import { combineReducers } from 'redux-immutable';
import tagsReducer from './tagsReducer';
import knowledgePiecesReducer from './knowledgePiecesReducer';

const rootReducer = combineReducers({
  tags: tagsReducer,
  knowledgePieces: knowledgePiecesReducer,
});

export default rootReducer;
