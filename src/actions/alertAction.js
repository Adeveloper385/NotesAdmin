import { SHOW_ALERT, HIDE_ALERT } from "../types";

export function showAlert(msg, category) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: { msg, category }});
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 5000);
  };
}
