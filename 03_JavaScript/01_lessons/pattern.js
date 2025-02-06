function shinyDiamondRug(n) {
   let str = "";
   let star = "*";

   for (let i = 0; i < n; i++) {
      str += star.repeat(2 * i + 1);
      str += "\n";
   }
   for (let i = n - 1; i > 0; i--) {
      str += star.repeat(2 * i - 1);
      if (i != 1) str += "\n";
   }
   return str;
}

// console.log(shinyDiamondRug(4))

function invertedMountain(n) {
   let star = "*";
   let pattern = "";
   for(let i = 0; i < n; i++) {
      pattern += star.repeat(n - i);
      if (i != n-1) pattern += "\n";
      console.log(star.repeat(n - i));
   }
   return pattern;
}
console.log(invertedMountain(4))