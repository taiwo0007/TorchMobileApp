import { authActions } from "./auth";
import { login } from "../util/auth-http";
import AsyncStorage from "@react-native-async-storage/async-storage";






export const saveAndAuthenticate = (enteredEmail, password) => {
  return async (dispatch, getState) => {
    try {
      const data = await login(enteredEmail, password);
      const {
        accountType,
        email,
        expiresAt,
        isHost,
        authToken,
        hostID,
        isVerified,
      } = data;

      const authState = {
        accountType,
        email,
        expiresAt,
        isHost,
        authToken,
        hostID,
        isVerified,
      };

      // Access the current state using getState()
      const currentState = getState();
      // Modify the state if needed
      const modifiedState = {
        ...currentState,
        authentication: authState,
      };

      // Update the state in AsyncStorage

      dispatch(authActions.login(authState));

           await AsyncStorage.setItem("authState", JSON.stringify(modifiedState));
      console.log(modifiedState);
    } catch (error) {
      // Handle the error (e.g., dispatch an action or display an error message)
           console.error("Error saving and authenticating:", error);

    }
  };
};
