import React from "react";
import Aux from "../../../../hoc/Auxilary/Auxilary";
const Tips = () => {
   return (
      <Aux>
         <div
            style={{
               textAlign: "center",
               fontWeight: "var(--fw-medium-level)",
            }}>
            Some tips and guides
         </div>
         <span>
            1. Set time both work & rest to get the most efficient. Time
            recommendation: work - 1h30min & rest - 15min{" "}
            <span role="img" aria-label="emoji">
               &#9200;
            </span>
         </span>
         <br />
         <span>
            2. Remember to clear completed task to get more motivation{" "}
            <span role="img" aria-label="emoji">
               &#127891;
            </span>
         </span>
         <br />
         <span>
            3. Try listening some chill songs to have more concentrating{" "}
            <span role="img" aria-label="emoji">
               &#127926;
            </span>
         </span>
         <br />
         <span>
            4. To edit task (or add tag): click task, then editting in
            task-detail{" "}
            <span role="img" aria-label="emoji">
               &#128195;
            </span>
         </span>
         <br />
         <div
            style={{
               textAlign: "center",
               fontWeight: "var(--fw-medium-level)",
            }}>
            Hope u enjoy{" "}
            <span role="img" aria-label="emoji">
               &#128519;
            </span>
         </div>
      </Aux>
   );
};

export default Tips;
