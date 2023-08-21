import React from "react";
import cn from "classnames";
import { useStore } from "@/store";

const Task = ({ title }) => {
  const task = useStore((store) => store.tasks.find((task) => task.title === title));
  console.log(task);
  return (
    <div className="task">
      <div>{title}</div>

      <div className={cn("status", task.state)}>{task.state}</div>
    </div>
  );
};

export default Task;
