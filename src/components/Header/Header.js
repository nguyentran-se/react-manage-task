import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { CogIcon, CubeIcon, AcademicCapIcon } from "@heroicons/react/outline";
import classes from "./Header.css";
import Button from "../UI/Button/Button";

const Header = (props) => {
   return (
      <section className={classes.Header}>
         <div className={classes.HeaderItems}>
            <div className={classes.Item}>
               <CogIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <AcademicCapIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <CubeIcon className={classes.Icon} />
            </div>
            <div className={classes.Item}>
               <SearchIcon className={classes.Icon} />
            </div>
         </div>
         <Button btnName="Go Premium" marginLeft="40px" />
      </section>
   );
};

export default Header;
