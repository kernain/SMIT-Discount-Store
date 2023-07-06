const isLoggedIn = false;

const reducers = (state = isLoggedIn, action) => {
  if (action.type === "firebaseLoggedIn") {
    return action.payLoad;
  } else {
    return state;
  }
};
export default reducers;
