// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var results = [];
  function innerFunc(node){
  	if(node.className !== undefined){
  		var what = node.className.split(' ');
  		if(what.indexOf(className) !== -1){
  			results.push(node);
  		}
  	}
  	if(node.childNodes.length > 0){
  	 for(var i = 0; i < node.childNodes.length; i++){
  	 	innerFunc(node.childNodes[i]);
  	 }
  	}
  }
 	innerFunc(document.body);
 	return results;
};

