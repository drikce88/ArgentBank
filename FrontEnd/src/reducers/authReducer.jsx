
const initialState = {
    isAuthenticated: false,
    token: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
                error: null
            };
        case 'LOGIN_ERROR':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                error: action.payload
            };
        case 'LOGOUT':
            localStorage.removeItem('token'); // Supprimer le token d'authentification du localStorage lors de la déconnexion
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                error: null
            };
        default:
            return state;
    }
};

export default authReducer;