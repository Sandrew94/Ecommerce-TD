import { logout } from "./loginAction";

export const logoutTimer = (time: number) => {
  return async (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout());
    }, time);
  };
};

//Da fare su server
