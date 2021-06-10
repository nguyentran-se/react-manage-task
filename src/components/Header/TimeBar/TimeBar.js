import React, { useState, useEffect } from "react";
import classes from "./TimeBar.css";
import parseToTime from "../../../helper/parseToTime";
const TimeBar = () => {
   const [time, setTime] = useState({
      hour: "",
      min: "",
      sec: "",
   });
   const [toggleStart, setToggleStart] = useState(false);
   let totalSecond = time.hour * 60 * 60 + time.min * 60 + time.sec;

   useEffect(() => {
      let countTime;
      if (toggleStart) {
         countTime = setTimeout(() => {
            totalSecond -= 1;
            setTime(parseToTime(totalSecond));
         }, 1000);
         if (totalSecond <= 0) {
            clearInterval(countTime);
            setToggleStart(false);
         }
      }

      return () => {
         clearInterval(countTime);
      };
   }, [time, toggleStart]);

   return (
      <div className={classes.TimeBar}>
         <div className={classes.Time}>
            <h4>Work in</h4>
            <input
               className={classes.Hour}
               placeholder="hour"
               value={time.hour}
               onChange={(e) => setTime({ ...time, hour: e.target.value })}
            />
            <span>:</span>
            <input
               className={classes.Minute}
               placeholder="min"
               value={time.min}
               onChange={(e) => setTime({ ...time, min: e.target.value })}
            />
            <span>:</span>
            <input
               className={classes.Sec}
               placeholder="sec"
               value={time.sec}
               onChange={(e) => setTime({ ...time, sec: e.target.value })}
            />
            <div
               className={classes.Start}
               onClick={() => setToggleStart(!toggleStart)}>
               Start
            </div>
         </div>
      </div>
   );
};

export default TimeBar;
