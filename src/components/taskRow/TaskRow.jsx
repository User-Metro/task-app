import React from "react";
import styles from "./TaskRow.module.css"

export const TaskRow = props => (
  <tr key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type="checkbox"
        className={styles.InputRow}
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
  </tr>
);
