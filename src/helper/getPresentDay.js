const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const MONTHS = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "June",
   "July",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec",
];
const time = new Date();
const hour = time.getHours();
const minute = time.getMinutes();
const day = time.getDay();
const date = time.getDate();
const month = time.getMonth();
const year = time.getFullYear();
const getPresentDay = {
   toString: () => {
      return `${hour > 10 ? hour : "0" + hour}:${
         minute > 10 ? minute : "0" + minute
      } on ${DAYS[day]}, ${MONTHS[month]} ${date} ${year}`;
   },

   hour,
   minute,
   day: DAYS[day],
   month: MONTHS[month],
   date,
   year,
};

export default getPresentDay;
