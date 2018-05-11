import _ from 'lodash';

import { FETCH_POSTS } from '../actions';

const postsReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id');
  }
};

export default postsReducer;
