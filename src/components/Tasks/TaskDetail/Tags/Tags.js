import React from "react";
import classes from "./Tags.css";
import { CheckIcon } from "@heroicons/react/solid";

const Tags = (props) => {
   const { modalClosed, tasks, addTag } = props;
   const [activeTask] = tasks.filter((task) => task.isActive);
   const tagOfActiveTask = [];
   // logic get Tag of activeTask to render tags modal
   let transformedTags;
   if (activeTask) {
      // get keyTag of tag
      for (const key in activeTask.tag) {
         if (key !== "personal") tagOfActiveTask.push(key);
      }
      transformedTags = tagOfActiveTask.map((keyTag) => {
         const keyTagObj = activeTask.tag[keyTag];
         const iconClasses = [classes.Icon];
         if (keyTagObj.pick) iconClasses.push(classes.Checked);
         return (
            <div
               key={keyTag}
               onClick={() => addTag(keyTag)}
               className={classes.Item}>
               <div
                  style={{
                     backgroundColor: keyTagObj.bColor,
                     color: keyTagObj.bColor,
                  }}
                  className={classes.Content}>
                  <CheckIcon className={iconClasses.join(" ")} />
                  <h4>{keyTag}</h4>
               </div>
            </div>
         );
      });
   }

   return (
      <section className={classes.Tags}>
         <div className={classes.Header}>
            <h3>Tags</h3>
         </div>
         <div className={classes.Container}>{transformedTags}</div>
         <div className={classes.Control}>
            <div className={classes.Btn} onClick={modalClosed}>
               Close
            </div>
            {/* <div className={classes.Separated}></div>
            <div className={classes.Btn}>Save</div> */}
         </div>
      </section>
   );
};

export default Tags;
