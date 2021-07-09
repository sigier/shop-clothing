import UserActionTypes from "./user.types";


export const setCurrentUser = (user) => ({

  type: UserActionTypes.SET_CURRENT_USER,

  payload: user
});

export const googleSignInStart = () => ({

  type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = (emailAndPassword) => ({

  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const signInSuccess = (user) => ({

  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({

  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error
});

export const persistUserSession = () => ({

  type: UserActionTypes.PERSIST_USER_SESSION
});

export const signOutStart = () => ({

  type: UserActionTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({

  type: UserActionTypes.SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({

  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error
});

export const signUpStart = (userCreds) => ({

  type: UserActionTypes.SIGNUP_START,
  payload: userCreds
});

export const signUpSuccess = ({ user, additionalUserData }) => ({

  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalUserData }
});

export const signUpFailure = (error) => ({

  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error
});


