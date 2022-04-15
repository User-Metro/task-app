import React from "react";
import Styles from "./VisibilityControl.module.css";

export const VisibilityControl = props => {
  return (
    <div className={Styles.DivTaskCompleted}>
      <input
        type="checkbox"
        className={Styles.InputTaskCompleted}
        checked={props.isChecked}
        onChange={ e => props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">
        Show { props.description }
      </label>
    </div>
  );
};
