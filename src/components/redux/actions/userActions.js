import authFunctions from '../../firebase/auth.js';
const {
    deleteUserFromFirestore,
    createUser,
    loginUser,
    logoutUser,
    getCurrentUser
} = authFunctions;

// Create a function action to login the user
export const login = (email, password) => {
    // Return a function
    return async (dispatch) => {
        // Try to login the user
        try {
            // Login the user
            const user = await loginUser(email, password);
            // Dispatch the action to login the user
            dispatch({
                type: 'LOGIN',
                userType: user.userType,
                token: user.token
            });
        } catch (error) {
            // Dispatch the action to login the user
            dispatch({
                type: 'LOGIN_ERROR',
                error: error.message
            });
        }
    }
}