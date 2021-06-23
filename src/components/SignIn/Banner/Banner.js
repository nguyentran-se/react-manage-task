import React, { useEffect, useState } from "react";
import img from "../../../assets/images/theme/bg-image-light3.jpg";
import classes from "./Banner.css";
import { BANNER_SIGNIN } from "../../../constant/GlodbalConstant";
const Banner = (props) => {
   const length = BANNER_SIGNIN.length;
   let timeout;
   const [index, setIndex] = useState(0);
   let transformedBanner = BANNER_SIGNIN.map((banner, index) => (
      <div className={classes.BannerItem} key={index} id={`banner-${index}`}>
         <h1 className={classes.BannerTitle}>{banner.title}</h1>
         <p className={classes.BannerDesc}>{banner.description}</p>
         <img className={classes.BannerImage} src={banner.imagePath} alt="" />
      </div>
   ));
   useEffect(() => {
      timeout = setTimeout(() => {
         setIndex((prevIndex) => {
            activeBanner();
            return prevIndex === length - 1 ? 0 : prevIndex + 1;
         });
      }, 5000);
   }, [index]);

   const btnClickHandler = (idx) => {
      setIndex(idx);
      if (idx !== index) {
         activeBanner();
         clearTimeout(timeout);
      }
   };

   const activeBanner = () => {
      for (let i = 0; i < length; i++) {
         document
            .getElementById(`banner-${i}`)
            .classList.remove(classes.ActiveBanner);
      }
      document
         .getElementById(`banner-${index}`)
         .classList.add(classes.ActiveBanner);
   };
   return (
      <section className={classes.Banner}>
         <div
            className={classes.Slider}
            style={{ transform: `translateX(-${index * 100}%)` }}>
            {transformedBanner}
         </div>

         <div className={classes.BtnList}>
            {BANNER_SIGNIN.map((_, idx) => (
               <button
                  key={idx}
                  className={index === idx ? classes.Active : undefined}
                  onClick={() => btnClickHandler(idx)}></button>
            ))}
         </div>
      </section>
   );
};

export default Banner;
