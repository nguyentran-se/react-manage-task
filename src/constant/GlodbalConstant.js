import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
import banner3 from "../assets/images/banner/banner-3.jpg";
import banner4 from "../assets/images/banner/banner-4.jpg";
export const DEFAULT_TAGS = {
   priority: { pick: false, bColor: "rgb(249, 210, 31)" },
   important: { pick: false, bColor: "#FF3D56" },
   deadline: { pick: false, bColor: "#FD7A4C" },
   trackback: { pick: false, bColor: "#2FC14A" },
   family: { pick: false, bColor: "#5DDB6A" },
   personal: { pick: true, bColor: null },
};

export const BANNER_SIGNIN = [
   {
      title: "Task management",
      description: "Increasing your productivity and working scientifically",
      imagePath: banner1,
   },
   {
      title: "Timer and rest",
      description: "This technique help you to gain the most efficient work",
      imagePath: banner2,
   },
   {
      title: "Tags",
      description: "Awesome tags in task are waiting for you",
      imagePath: banner3,
   },
   {
      title: "For community",
      description: "No ads and totally free",
      imagePath: banner4,
   },
];
