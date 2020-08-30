import { API } from '../types/api'
import { GET_STICKIES, ADD_STICKY, SAVE_STICKY, DELETE_STICKY, DELETE_STICKY_SUCCESS } from '../types/stickies'

export const getStickies = () => ({
  type: API,
  name: GET_STICKIES,
  url: '/api/stickies/krishna',
})

export const addSticky = () => ({
  type: API,
  name: ADD_STICKY,
  method: 'POST',
  url: '/api/sticky',
  data: {
    content: '',
  },
})

export const saveSticky = ({ content, id, stickyPosition }) => ({
  type: API,
  name: SAVE_STICKY,
  method: 'POST',
  url: '/api/sticky',
  data: {
    content,
    ...(id ? { id } : null)
  },
  callback: data => ({
    stickyPosition,
    data,
  })
})

export const deleteSticky = ({ id, stickyPosition }) => dispatch => {
  if(id) {
    dispatch({
      type: API,
      name: DELETE_STICKY,
      method: 'DELETE',
      url: '/api/sticky',
      data: {
        id
      },
      callback: data => ({
        stickyPosition,
        data,
      })
    })
  } else {
    dispatch({
      type: DELETE_STICKY_SUCCESS,
      paylaod: {
        stickyPosition,
      }
    })
  }
}
