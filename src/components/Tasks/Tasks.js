import React from "react";
import Counter from "../Counter/Counter";
import TaskItems from "./TaskItems/TaskItems";
import classes from "./Tasks.css";

const Tasks = (props) => {
  const { groups, toggleTaskList } = props;
  let topics = [];
  for (const key in groups) {
    topics.push(key);
  }
  let transfromedGroups = topics.map((topic) => (
    <div key={topic}>
      <div onClick={() => toggleTaskList(topic)} className={classes.Header}>
        <h3>{topic}</h3>
        <Counter
          length={groups[topic].tasks.filter((ele) => !ele.isCompleted).length}
        />
        {/* <div className={classes.Counter}>
          {groups[topic].tasks.filter((ele) => !ele.isCompleted).length}
        </div> */}
      </div>
      <TaskItems
        isSelected={groups[topic].isSelected}
        tasks={groups[topic].tasks}
        // activeTask={activeTask}
      />
    </div>
  ));
  return <div className={classes.Tasks}>{transfromedGroups}</div>;
};

export default Tasks;
