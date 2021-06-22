import React from "react";
import img from "../../../assets/images/theme/bg-image-light3.jpg";
import classes from "./Banner.css";
const Banner = (props) => {
   return (
      <section className={classes.Banner}>
         <div className={classes.BannerItem}>
            <h1 className={classes.BannerTitle}>Banner Title</h1>
            <p className={classes.BannerDesc}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
               vero quaerat harum, illo neque nulla! Animi repellat
            </p>
            <img className={classes.BannerImage} src={img} alt="" />
         </div>
         <div className={classes.BtnList}>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
         </div>
      </section>
   );
};

export default Banner;
