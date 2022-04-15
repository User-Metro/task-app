import React from "react";
import Styles from "./TaskRow.module.css";

export const TaskRow = (props) => (
  <div key={props.task.name} className={Styles.ContainerTask}>
    <input
      type="checkbox"
      className={Styles.InputTaskCreated}
      checked={props.task.done}
      onChange={() => props.toggleTask(props.task)}
    />
    <span>{props.task.name}</span>
  </div>
);
