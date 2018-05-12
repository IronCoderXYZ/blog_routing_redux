import _ from 'lodash';

import { FETCH_POST, DELETE_POST, FETCH_POSTS, CREATE_POST } from '../actions';

const postsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case FETCH_POST:
      return { ...state, [payload.data.id]: payload.data };
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id');
    case CREATE_POST:
      return state;
    case DELETE_POST:
      return _.omit(state, action.payload);
  }
};

export default postsReducer;
