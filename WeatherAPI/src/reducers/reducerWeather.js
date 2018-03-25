import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){ 
    switch (action.type) {
        case FETCH_WEATHER:
        return [ action.payload.data, ...state ];
        // Same as above - line 6 - return state.concat([action.payload.data]);
    }
    return state;
}