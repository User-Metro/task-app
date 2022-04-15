import React, { useState, useEffect } from "react";
import { TaskBanner } from "./components/taskBanner";
import { TaskCreator } from "./components/taskCreator";
import { TaskRow } from "./components/taskRow";
import { VisibilityControl } from "./components/visibilityControl";
import Styles from "./App.module.css";

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
      setUserName("Xpectre");
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
    <div className={Styles.Template}>
      <div className={Styles.Content}>
        <TaskBanner userName={userName} taskItems={taskItems} />

        <div className={Styles.ContainerItems}>
          <div>{taskTableRows(false)}</div>

          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={(checked) => setshowCompleted(checked)}
          />

          {showCompleted && (
            <div className={Styles.DivTaskCompleted}>{taskTableRows(true)}</div>
          )}

          <div className={Styles.PositionInputCreator}>
            <TaskCreator callback={createNewTask}/>
          </div>

        </div>
      </div>
    </div>
  );
}
