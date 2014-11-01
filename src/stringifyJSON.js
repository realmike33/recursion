// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
 // your code goes here
 var solution = "";
  if (typeof obj === "string") {
  solution += '"' + obj + '"';
  } else if (typeof obj === "number") {
 solution += obj ;
} else if (typeof obj === "boolean") {
  solution += obj;
} else if (obj === null) {
  solution += "null";
} else if (Array.isArray(obj)) {
 solution += "[";
 for(var i=0; i < obj.length; i++) {
   if (i === obj.length -1) {
      solution += stringifyJSON(obj[i]);
   } else {
     solution += stringifyJSON(obj[i]) + ",";
   }
 }
 solution += "]";
} else if (typeof obj === "object") {
 solution += "{";
 var count = 1;
 for(key in obj) {
    if (count === Object.keys(obj).length ) {
      if ( typeof obj[key] === "undefined" || _.isFunction(obj[key]) || typeof obj[key] === "symbol") {
        solution += "";
      } else {
        solution += stringifyJSON(key) + ":";
        solution += stringifyJSON(obj[key]);
      }
    } else {
     if ( typeof obj[key] === "undefined" || _.isFunction(obj[key]) || typeof obj[key] === "symbol") {
        solution += "";
      } else {
        solution += stringifyJSON(key) + ":";
        solution += stringifyJSON(obj[key]) + ",";
      }
      count += 1;
    }
 }
 solution += "}";
}
return solution;
 };