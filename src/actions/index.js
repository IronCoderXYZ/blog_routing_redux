// NPM Imports
import axios from 'axios';
// Action Constants
export const FETCH_POSTS = 'FETCH_POSTS';
// API Constants
const API_KEY = 'UNIQUE_API_KEY_123987';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  const request = axios.get(`${BASE_URL}/posts&${API_KEY}`);
  return {
    payload: request,
    type: FETCH_POSTS
  };
};
