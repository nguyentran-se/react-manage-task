import React from "react";
import TaskItems from "./TaskItems/TaskItems";
import classes from "./Tasks.css";

const Tasks = (props) => {
   const { groups, toggleTaskList, activeTask } = props;
   console.log(groups);
   let topics = [];
   for (const key in groups) {
      topics.push(key);
   }
   console.log(topics);
   let transfromedGroups = topics.map((topic) => (
      <div key={topic}>
         <div onClick={() => toggleTaskList(topic)} className={classes.Header}>
            <h3>{topic}</h3>
            <div className={classes.Counter}>{groups[topic].tasks.length}</div>
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
