import axios from "axios";

export const getUserProfile = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        null,
        config
      );
      console.log("🚀 ~ return ~ response:", response.data);
      dispatch({
        type: "GET_USER_PROFILE_SUCCESS",
        payload: response.data.body,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_PROFILE_ERROR",
        payload: error.message,
      });
    }
  };
};

export const updateUserProfile = (userData) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Ajoutez le token d'authentification dans l'en-tête
      },
    };

    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        userData,
        config
      );
      dispatch({
        type: "UPDATE_USER_PROFILE_SUCCESS",
        payload: response.data.body,
      });
      return { success: true };
    } catch (error) {
      dispatch({
        type: "UPDATE_USER_PROFILE_ERROR",
        payload: error.response
          ? error.response.data.error
          : "Une erreur s'est produite lors de la mise à jour du profil utilisateur.",
      });
      return { success: false };
    }
  };
};