export const SET_TEXT = 'SET_TEXT';
export const SET_TITLE = 'SET_TITLE';

export const setTitle = (payload) => ({
  type: SET_TITLE,
  payload: payload
});

export const setText = (payload) => ({
  type: SET_TEXT,
  payload: payload
});
