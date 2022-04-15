import React, { useState, useEffect } from "react";
import { TaskBanner } from "./components/taskBanner";
import { TaskCreator } from "./components/taskCreator";
import { TaskRow } from "./components/taskRow";
import { VisibilityControl } from "./components/visibilityControl";
import styles from "./App.module.css";

export default function App() {
  const [userName, setUserName] = useState("Xpectre");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false },
  ]);
  const [showCompleted, setshowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("fazt");
      setTaskItems([
        { name: "Task One", done: false },
        { name: "Task Two", done: false },
        { name: "Task Three", done: true },
        { name: "Task Four", done: false },
      ]);
      setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <div className={styles.template}>
      <div className={styles.content}>
        <TaskBanner userName={userName} taskItems={taskItems} />
        <div className="container-fluid">
          <TaskCreator callback={createNewTask} />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(false)}</tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl
              description="Completed Tasks"
              isChecked={showCompleted}
              callback={(checked) => setshowCompleted(checked)}
            />
          </div>
          {showCompleted && (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tbody>{taskTableRows(true)}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
