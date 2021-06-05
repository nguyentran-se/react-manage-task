import React from "react";
import TaskItems from "./TaskItems/TaskItems";
import classes from "./Tasks.css";

const Tasks = ({ groups, toggleTaskList, deleteTask, activeTask }) => {
   console.log(groups);
   let topics = [];
   for (const key in groups) {
      topics.push(key);
   }
   console.log(topics);
   let transfromedGroups = topics.map((topic) => (
      <div key={topic} className={classes.Tasks}>
         <div onClick={() => toggleTaskList(topic)} className={classes.Header}>
            <h3>{topic}</h3>
            <div className={classes.Counter}>{groups[topic].tasks.length}</div>
         </div>
         <TaskItems
            isSelected={groups[topic].isSelected}
            tasks={groups[topic].tasks}
            deleteTask={deleteTask}
            // activeTask={activeTask}
         />
      </div>
   ));
   return transfromedGroups;
};

export default Tasks;