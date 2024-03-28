import axios from 'axios';


export const login = (userData) => {
    return async (dispatch) => {
        try {
            //envoie de la requéte post au backend pour vérifier les informations de connexion
            const response = await axios.post('/api/v1/user/login', userData);

            //mettre à jour l'état de l'authentification une fois l'utilisateur connecté
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.token,
        
            });
            // Retourner les informations sur la réussite de la connexion
            return { success: true };
        } catch (error) {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: error.response.data.error,
                success: false
            });
            // Retourner les informations sur l'échec de la connexion
            return { success: false };
        }
    };
};