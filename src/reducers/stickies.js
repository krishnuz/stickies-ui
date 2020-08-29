import { GET_STICKIES } from '../actions/types/stickies'

const initialState = {
  isFetching: false,
}

const stickies = (state = initialState, action) => {
  switch(action.type) {
    case GET_STICKIES: {
      return {
        ...state,
        isFetching: true,
      }
    }

    default: {
      return state
    }
  }
}

export default stickies
