import { combineReducers } from "redux";
import authInfo from "./authInfo";
import isLoggedIn from "./isAuthenticated";
import admins from "./admins";
import isAdmin from "./isAdmin";
import cartItems from "./cart"

const reducers = combineReducers({
  myAuth: authInfo,
  isAuthLoggedIn: isLoggedIn,
  myAdmins: admins,
  isAdminLoggedIn: isAdmin,
  cartItems: cartItems
});

export default reducers;
