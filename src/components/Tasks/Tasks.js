import React from "react";
import TaskItems from "./TaskItems/TaskItems";
import classes from "./Tasks.css";

const Tasks = ({ groups }) => {
   console.log(groups);
   let topics = [];
   for (const key in groups) {
      topics.push(key);
   }
   console.log(topics);
   let transfromedGroups = topics.map((topic) => (
      <div key={topic} className={classes.Tasks}>
         <div className={classes.Today}>
            <div className={classes.Header}>
               <h3>{topic}</h3>
               <div className={classes.Counter}>
                  {groups[topic].tasks.length}
               </div>
            </div>
            <TaskItems tasks={groups[topic].tasks} />
         </div>
      </div>
   ));
   return transfromedGroups;
   // return (
   //    <section className={classes.Tasks}>
   //       <div className={classes.Today}>
   //          <div className={classes.Header}>
   //             <h3>dynamic Today</h3>
   //             <div className={classes.Counter}>3</div>
   //          </div>
   //          <TaskItems />
   //       </div>
   //    </section>
   // );
};

export default Tasks;
