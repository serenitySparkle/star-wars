import {
    SUCCESS, 
    FAILURE, 
    REQUEST, 
} from '../actions'

function appReducer(state = {loading: false}, action) {
    switch (action.type) {
        case REQUEST:
            return {...state,
                loading: true
              }
      case SUCCESS:
        return {state,
            loading: false,
            data: action.data,
        }
      case FAILURE:
        return {state,
            loading: false,
            data: action.data,
        }
      default:
        return state
    }
  }

  export default appReducer