import { useEffect } from "react";
const clickOutSideHandler = (ref, callback) => {
   useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
         // console.log(ref.current);
         // console.log(event.target);
         if (ref.current && !ref.current.contains(event.target)) {
            callback(false);
         }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         // Unbind the event listener on clean up
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [ref]);
};

export default clickOutSideHandler;
