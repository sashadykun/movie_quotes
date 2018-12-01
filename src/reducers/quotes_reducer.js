import types from '../actions/types';

const DAFAULT_STATE = {
    movie: '',
};

export default (state = DAFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_QUOTE:
            return{ movie: action.quote};
        default:
        return state;
    }
}