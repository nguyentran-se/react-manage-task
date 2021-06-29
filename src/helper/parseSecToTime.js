const parseSecToTime = (totalSecond, hasRest = false) => {
   let hour = Math.floor(totalSecond / (60 * 60));
   let divisor_for_minutes = totalSecond % (60 * 60);

   let min = Math.floor(divisor_for_minutes / 60);
   let divisor_for_seconds = divisor_for_minutes % 60;
   let sec = Math.ceil(divisor_for_seconds);
   // console.log("[parSec]" + sec);
   return {
      hour,
      min,
      sec,
   };
};
export default parseSecToTime;

// const parseSecToTime = (totalSecond) => {
//    let hour = Math.floor(totalSecond / (60 * 60));
//    let divisor_for_minutes = totalSecond % (60 * 60);

//    let min = Math.floor(divisor_for_minutes / 60);
//    let divisor_for_seconds = divisor_for_minutes % 60;

//    let sec = Math.ceil(divisor_for_seconds);
//    return {
//       hour,
//       min,
//       sec,
//    };
// };
// export default parseSecToTime;
