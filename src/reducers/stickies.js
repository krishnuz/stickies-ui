import {
  GET_STICKIES_SUCCESS,
  ADD_STICKY_SUCCESS,
  SAVE_STICKY_SUCCESS,
  DELETE_STICKY_SUCCESS
} from '../actions/types/stickies'

const initialState = {
  data: null
}

const stickies = (state = initialState, action) => {
  switch(action.type) {
    case GET_STICKIES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case ADD_STICKY_SUCCESS: {
      return {
        ...state,
        data: [
          ...state.data,
          {
            ...action.payload
          }
        ]
      }
    }

    case SAVE_STICKY_SUCCESS: {
      const { stickyPosition, data } = action.payload
      return {
        ...state,
        data: state.data.map((sticky, index) => {
          if(index === stickyPosition) {
            return {
              ...sticky,
              data,
            }
          }
          return sticky
        })
      }
    }

    case DELETE_STICKY_SUCCESS: {
      const { stickyPosition } = action.payload
      return {
        ...state,
        data: state.data.filter((sticky, index) => index !== stickyPosition)
      }
    }

    default: {
      return state
    }
  }
}

export default stickies
