import React, { useState, useEffect } from "react";
import classes from "./TimeBar.css";
import parseSecToTime from "../../../helper/parseSecToTime";
// import Button from "../../UI/Button/Button";
import TimeInput from "./TimeInput/TimeInput";
import { PlayIcon, PauseIcon, StopIcon } from "@heroicons/react/outline";

const TimeBar = () => {
   const [rest, setRest] = useState({
      min: "",
      sec: "",
   });

   const [time, setTime] = useState({
      hour: "",
      min: "",
      sec: "",
      isWorkDone: false,
   });

   const [toggleStart, setToggleStart] = useState(false);

   let totalSecond = time.hour * 60 * 60 + time.min * 60 + time.sec;
   // useEffect(() => {
   //    let countTime;
   //    if (toggleStart) {
   //       countTime = setTimeout(() => {
   //          totalSecond -= 1;
   //          setTime({ ...time, ...parseSecToTime(totalSecond) });
   //       }, 1000);
   //       if (totalSecond <= 0) {
   //          clearInterval(countTime);
   //          setToggleStart(false);
   //       }
   //    }
   //    return () => {
   //       clearInterval(countTime);
   //    };
   // }, [time, toggleStart]);

   /*totalSecond=time.hour * 60 * 60 + time.min * 60 + time.sec ||
   rest.min * 60 + rest.sec; 
   totalSecond never equal to 0;

   if (time.isWorkDone) totalSecond = rest.min * 60 + rest.sec;

   */

   // console.log(totalSecond);
   // console.log("TIME", totalSecond);
   if (time.isWorkDone) totalSecond = rest.min * 60 + rest.sec;
   // console.log("REST", totalSecond);
   // console.log("1ST", time);
   useEffect(() => {
      let countTime;
      // console.log("2ND START EFFECT");
      if (toggleStart) {
         // console.log("INSIDE IF");
         countTime = setTimeout(() => {
            totalSecond -= 1;
            if (time.isWorkDone) {
               setRest({
                  ...rest,
                  ...parseSecToTime(totalSecond),
                  hour: undefined,
               });
            } else {
               //count down if work-in has not done!
               // console.log("4TH SETTIME", totalSecond);
               setTime({ ...time, ...parseSecToTime(totalSecond) });
            }
         }, 1000);
         if (totalSecond === 0 && !time.isWorkDone) {
            setTime({ ...time, isWorkDone: true });
         } else if (totalSecond <= 0) {
            clearInterval(countTime);
            setToggleStart(false);
            setTime({ ...time, hour: "", min: "", sec: "", isWorkDone: false });
            setRest({ ...rest, min: "", sec: "" });
            // console.log("<0");
         }
         // console.log("3RD OUTSIDE", totalSecond);
      }
      return () => {
         clearInterval(countTime);
      };
   }, [time, toggleStart, rest]);
   // set disabled rest input
   const emptyTime = time.hour === "" && time.min === "" && time.sec === "";

   return (
      <div className={classes.TimeBar}>
         <div className={classes.Time}>
            <h4
               className={
                  time.isWorkDone === false && emptyTime === false
                     ? classes.HighLight
                     : undefined
               }>
               Work in
            </h4>
            <TimeInput
               placeholder="hour"
               value={time.isWorkDone ? "" : time.hour}
               changed={(e) => setTime({ ...time, hour: e.target.value })}
            />
            <span>:</span>
            <TimeInput
               placeholder="min"
               value={time.isWorkDone ? "" : time.min}
               changed={(e) => setTime({ ...time, min: e.target.value })}
            />
            <span>:</span>
            <TimeInput
               placeholder="sec"
               value={time.isWorkDone ? "" : time.sec}
               changed={(e) => setTime({ ...time, sec: e.target.value })}
               inputCustom={["MediumSize"]}
            />
            <h4 className={time.isWorkDone ? classes.HighLight : undefined}>
               Rest in
            </h4>
            <TimeInput
               placeholder="min"
               value={rest.min}
               changed={(e) => setRest({ ...rest, min: e.target.value })}
               disabledRest={emptyTime}
            />
            <span>:</span>
            <TimeInput
               placeholder="sec"
               value={rest.sec}
               changed={(e) => setRest({ ...rest, sec: e.target.value })}
               inputCustom={["MediumSize"]}
               disabledRest={emptyTime}
            />
            <div
               className={classes.WrapIcon}
               onClick={() => setToggleStart(!toggleStart)}>
               {toggleStart ? (
                  <PauseIcon className={classes.Icon} />
               ) : (
                  <PlayIcon className={classes.Icon} />
               )}
            </div>
            <div className={classes.WrapIcon}>
               <StopIcon
                  className={
                     toggleStart
                        ? [classes.Icon, classes.Stop].join(" ")
                        : [classes.Icon, classes.Disabled].join(" ")
                  }
                  onClick={() => {
                     setTime({
                        ...time,
                        hour: "",
                        min: "",
                        sec: "",
                        isWorkDone: true,
                     });
                     setRest({ ...rest, min: "", sec: "" });
                  }}
               />
            </div>
            {/* <Button
               btnType={["ButtonStart"]}
               clicked={() => setToggleStart(!toggleStart)}>
               Start
            </Button> */}
         </div>
      </div>
   );
};

export default TimeBar;
