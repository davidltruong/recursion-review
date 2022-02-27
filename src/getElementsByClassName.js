// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // create result array
  var result = [];
  // check if node is passed into argument
  if (!node) {
    // if passed in, create variable node = node
    // if not passed in, create variable node = document.body
    var node = document.body;
  }
  // check if element.classList contains className
  if (node.classList && node.classList.contains(className)) {
    // if className is present then push into result array
    result.push(node);
  }
  // check if it has child nodes with element.childNodes
  if (node.children) {
    // if child node is present iterate through child nodes
    for (var i = 0; i < node.children.length; i++) {
      //call function getElementsByClassName(className, element.childNode)
      result = result.concat(getElementsByClassName(className, node.children[i]));
    }
  }
  // return result array
  return result;
  // your code here
};
