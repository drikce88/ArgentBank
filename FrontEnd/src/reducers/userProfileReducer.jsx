const initialState = {
    userName: '',
    loading: false,
    error: null,
};

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_PROFILE_SUCCESS':
            return {
                ...state,
                userName: action.payload.userName,
                loading: false,
                error: null,
            };
        case 'GET_USER_PROFILE_ERROR':
            return {
                ...state,
                error: action.payload
            };
        case 'UPDATE_USER_PROFILE_SUCCESS':
            return {
                ...state,
                userName: action.payload.userName,
                loading: false,
                error: null,
            };
        case 'UPDATE_USER_PROFILE_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userProfileReducer;