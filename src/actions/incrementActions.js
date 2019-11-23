import * as types from './actionTypes';
import { dispatch } from '../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/pairs';

export function increment() {
  return dispatch => dispatch({ type: types.INCREMENT_COUNT });
}
