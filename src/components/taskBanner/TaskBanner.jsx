import React from "react";
import Styles from "./TaskBanner.module.css"

export const TaskBanner = props => (
  <div className={Styles.Banner}>
    {props.userName}'s Tasks App ({props.taskItems.filter(t => !t.done).length}{" "}
    tasks to do)
  </div>
);
