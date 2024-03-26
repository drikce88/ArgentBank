import axios from 'axios';


export const login = (userData) => {
    return async (dispatch) => {
        try {
            //envoie de la requete post au backend pour vérifier les informations de connexion
            const response =  await axios.post('/api/v1/user/login', userData);

            // Mettre à jour l'état de l'authentification une fois que l'utilisateur est connecté avec succès
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.token
            });
    } catch (error) {
       // En cas d'échec de la connexion, envoyer une action d'erreur
       dispatch({
           type: 'LOGIN_ERROR',
           payload: error.response.data.message
       }); 
    }
};
 };