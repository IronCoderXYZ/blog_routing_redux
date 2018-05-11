// NPM Imports
import axios from 'axios';
// Action Constants
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
// API Constants
const API_KEY = 'UNIQUE_API_KEY_1239876';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  const request = axios.get(`${BASE_URL}/posts?key=${API_KEY}`);
  return {
    payload: request,
    type: FETCH_POSTS
  };
};

export const createPost = (values, callback) => {
  const request = axios
    .post(`${BASE_URL}/posts?key=${API_KEY}`, values)
    .then(() => callback());
  return {
    payload: request,
    type: CREATE_POST
  };
};

export const fetchPost = id => {
  const request = axios.get(`${BASE_URL}/posts/${id}?key=${API_KEY}`);
  return {
    payload: request,
    type: FETCH_POST
  };
};
