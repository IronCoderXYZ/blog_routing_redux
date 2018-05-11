// NPM Imports
import axios from 'axios';
// Action Constants
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POSTS = 'FETCH_POSTS';
// API Constants
const API_KEY = 'UNIQUE_API_KEY_123987';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';

export const fetchPosts = () => {
  const request = axios.get(`${BASE_URL}/posts?key=${API_KEY}`);
  return {
    payload: request,
    type: FETCH_POSTS
  };
};

export const createPost = values => {
  const request = axios.post(`${BASE_URL}/posts?key=${API_KEY}`, values);
  return {
    payload: request,
    type: CREATE_POST
  };
};
