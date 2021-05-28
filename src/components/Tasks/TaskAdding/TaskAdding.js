import React, { useState, useEffect, useRef } from "react";
import classes from "./TaskAdding.css";
import { ArrowUpIcon } from "@heroicons/react/solid";
import {
   TagIcon,
   BellIcon,
   HeartIcon,
   CollectionIcon,
} from "@heroicons/react/outline";

const TaskAdding = (props) => {
   const [selected, setSelected] = useState(false);

   const inputClickHandler = (e) => {
      setSelected(true);
   };

   function clickOutSideHandler(ref) {
      useEffect(() => {
         /**
          * Alert if clicked on outside of element
          */
         function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
               setSelected(false);
            }
         }
         // Bind the event listener
         document.addEventListener("mousedown", handleClickOutside);
         return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
         };
      }, [ref]);
   }

   const wrapperRef = useRef(null);
   clickOutSideHandler(wrapperRef);

   return (
      <section
         ref={wrapperRef}
         onClick={(e) => inputClickHandler(e)}
         className={classes.TaskAdding}>
         <div className={classes.TaskInput}>
            <input type="text" placeholder="Click to quickly add a task" />
            <div className={classes.IconWrapper}>
               <ArrowUpIcon className={classes.Icon} />
            </div>
         </div>
         <div
            className={
               selected
                  ? `${classes.PanelWrapper} ${classes.ShowPanel}`
                  : `${classes.PanelWrapper}`
            }>
            <div className={classes.Panel}>
               <div>
                  <BellIcon className={classes.PanelIcon} />
               </div>
               <span className={classes.Separate}></span>
               <div>
                  <CollectionIcon className={classes.PanelIcon} />
               </div>
               <span className={classes.Separate}></span>

               <div>
                  <HeartIcon className={classes.PanelIcon} />
               </div>
               <span className={classes.Separate}></span>

               <div>
                  <TagIcon className={classes.PanelIcon} />
               </div>
            </div>
         </div>
      </section>
   );
};

export default TaskAdding;
