import React, { useState } from "react";
import Styles from "./TaskCreator.module.css";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className={Styles.container}>
      <button className={Styles.btnTaskCreator} onClick={createNewTask}>
        Add
      </button>
      <input
        type="text"
        placeholder="Agregar una nueva tarea"
        className={Styles.inputTaskCreator}
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
    </div>
  );
};
