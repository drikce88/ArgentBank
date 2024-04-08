import axios from 'axios';


export const login = (userData) => {
    return async (dispatch) => {
        try {
            //envoie de la requéte post au backend pour vérifier les informations de connexion
            const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);

            localStorage.setItem("token", response.data.body.token);
            //mettre à jour l'état de l'authentification une fois l'utilisateur connecté
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.body.token,
                success: true,
        
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

export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };