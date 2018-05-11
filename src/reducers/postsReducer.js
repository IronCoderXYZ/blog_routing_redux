import _ from 'lodash';

import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions';

const postsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return { ...state, [payload.data.id]: payload.data };
    case FETCH_POST:
      return state;
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id');
    case CREATE_POST:
      return state;
  }
};

export default postsReducer;
