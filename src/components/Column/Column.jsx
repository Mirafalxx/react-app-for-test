import React from "react";
import Task from "../Task/Task";
import { useStore } from "../../store";

const Column = ({ state }) => {
  const tasks = useStore((store) => store.tasks.filter((task) => task.state === state));

  return (
    <div className="column">
      <p style={{ marginBottom: "10px" }}>{state}</p>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
};

export default Column;
