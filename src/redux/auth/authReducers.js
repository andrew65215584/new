import { createReducer } from '@reduxjs/toolkit';

import {
  postUserInfoSuccess,
  loginUserSuccess,
  logoutUserSuccess,
  getCurrentUserSuccess,
} from './authActions';

const initialState = {
  user: {
    name: '',
    email: '',
  },

  //   token: null,
  // isLoading: false,
};

export const authReducer = createReducer(initialState, {
  [getCurrentUserSuccess]: (state, { payload }) => {
    return {
      ...state,
      user: {
        ...payload,
      },
    };
  },

  [postUserInfoSuccess]: (state, { payload }) => ({
    ...state,
    user: {
      ...payload.user,
    },
    token: true,
  }),

  [loginUserSuccess]: (state, { payload }) => ({
    ...state,
    user: {
      ...payload,
    },
    token: true,
  }),

  [logoutUserSuccess]: (state, { payload }) => ({
    ...initialState,
  }),
});
