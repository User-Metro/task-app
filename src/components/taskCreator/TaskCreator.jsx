import React, { useState } from "react";
import styles from "./TaskCreator.module.css";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className={styles.container}>
      <button className={styles.btnTaskCreator} onClick={createNewTask}>
        Add
      </button>
      <input
        type="text"
        placeholder="Agregar una nueva tarea"
        className={styles.inputTaskCreator}
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
    </div>
  );
};
