import initialState from '../initialState';
import {
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
    START_FETCH_DATA
} from '../actions/index';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                success: true,
                process: false,
                imageData: action.imageData
            });
        case FETCH_DATA_FAILED:
            return Object.assign({}, state, {
                success: false,
                imageData: [],
                process: false
            });
        case START_FETCH_DATA:
            return Object.assign({}, state, {
                process: true
            });
        default:
            return state;
    }
}

export default rootReducer;