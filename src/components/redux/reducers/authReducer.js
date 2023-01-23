const initialState = {
  isLoggedIn: false,
  userType: '',
  token: '',
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        userType: action.userType,
        token: action.token
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userType: '',
        token: ''
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default authReducer;
