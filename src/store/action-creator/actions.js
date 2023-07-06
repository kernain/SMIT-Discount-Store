export const sendAdminData = (data) => {
  return (dispatch) => {
    dispatch({
      type: "adminData",
      payload: data,
    });
  };
};

export const isAuthenticatedData = (is) => {
  return (dispatch) => {
    dispatch({
      type: "firebaseLoggedIn",
      payLoad: is,
    });
  };
};

export const admintExists = (is) => {
  return (dispatch) => {
    dispatch({
      type: "isAdmin",
      payload: is,
    });
  };
};

export const authData = (auth) => {
  return (dispatch) => {
    dispatch({
      type: "firebaseAuth",
      payload: auth,
    });
  };
};




export const addToCart = (cartItem) => {
  return (dispatch) => {
    dispatch({
      type: 'addToCart',
      payLoad: cartItem
    })
  }
}




export const removeFromCart = () => {
  return (dispatch) => {
    dispatch({
      type: 'removeFromCart',
    })
  }
}
