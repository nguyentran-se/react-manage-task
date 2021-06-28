const sortObjectByValue = (object) => {
   // console.log(object);
   Object.keys(object).forEach((key) => {
      if (!object[key].order) return;
   });
   let sorted = Object.keys(object).sort(
      (a, b) => object[b].order - object[a].order
   );
   // console.log(sorted);
   return sorted;
};

export default sortObjectByValue;
