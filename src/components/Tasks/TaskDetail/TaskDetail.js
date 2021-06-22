import { SunIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/index";
import Modal from "../../UI/Modal/Modal";
import classes from "./TaskDetail.css";
import Tags from "./Tags/Tags";

const TaskDetail = (props) => {
   const { tasks, editTitleTask, addTag, deleteTag } = props;
   let editIndex;
   let activeItem;
   tasks.forEach((task, index) => {
      if (task.isActive) {
         editIndex = index;
         activeItem = task;
      }
   });

   //get value of activeItem
   let tagKey = [];
   let value = "";
   let createdTime = "";
   if (activeItem) {
      value = activeItem.title;
      createdTime = activeItem.created;
      for (const key in activeItem.tag) {
         if (activeItem.tag[key].pick) tagKey.push(key);
      }
   }

   const [showModal, setShowModal] = useState(false);
   // state tags
   // console.log("[TESTING]");
   return (
      <div className={classes.TaskDetail}>
         <div className={classes.Header}>
            <h3>Task Details</h3>
         </div>
         <div className={classes.Container}>
            <div className={classes.Input}>
               <input
                  type="text"
                  key={value} //bad practice should use controlled
                  defaultValue={value}
                  onBlur={(event) =>
                     editTitleTask(editIndex, event.target.value)
                  }
               />
            </div>
            <div className={classes.AddTag}>
               {tagKey.map(
                  (key) =>
                     key !== "personal" && (
                        <div
                           className={classes.Tag}
                           key={key}
                           style={{
                              backgroundColor: activeItem.tag[key].bColor,
                              border: `1px solid ${activeItem.tag[key].bColor}`,
                           }}>
                           {key.charAt(0).toUpperCase() + key.slice(1)}
                           <XIcon
                              onClick={() => deleteTag(key)}
                              className={`${classes.Icon} ${classes.Mini}`}
                           />
                        </div>
                     )
               )}
               <div
                  className={classes.AddTagTitle}
                  onClick={() => setShowModal(true)}>
                  Add Tag
               </div>

               <Modal
                  showModal={showModal}
                  // showModal={true}
                  modalClosed={() => setShowModal(false)}>
                  <Tags
                     addTag={addTag}
                     tasks={tasks}
                     modalClosed={() => setShowModal(false)}
                  />
               </Modal>
            </div>
            <div className={classes.RemindMe}>
               <h4>REMIND ME</h4>
               <div className={classes.Option}>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Set time</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Tomorrow</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Next week</span>
                  </div>
                  <div className={classes.Item}>
                     <SunIcon className={classes.Icon} />
                     <span>Daily</span>
                  </div>
               </div>
            </div>
            <div className={classes.DateCreated}>
               <h4>CREATED</h4>
               <h4>{createdTime}</h4>
            </div>
         </div>
      </div>
   );
};
const mapStateToProps = (state) => {
   return {
      tasks: state.tsk.groups.today.tasks,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      editTitleTask: (editIndex, editValue) =>
         dispatch(actionCreators.editTitleTask(editIndex, editValue)),
      addTag: (keyTag) => dispatch(actionCreators.addTag(keyTag)),
      deleteTag: (keyTag) => dispatch(actionCreators.deleteTag(keyTag)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
