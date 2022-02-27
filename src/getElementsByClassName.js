// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  console.log('dom ' + JSON.stringify(document.body));
  console.log('name ' + className);
  // create result array
  var result = [];
  // check if node is passed into argument
  if (!node) {
    // if passed in, create variable node = node
    // if not passed in, create variable node = document.body
    var node = document.body;
  }
  console.log('node ' + JSON.stringify(node));
  // check if element.classList contains className
  console.log('node.classList ' + node.classList);
  if (node.classList && node.classList.contains(className)) {
    console.log('dom ' + document.body.classList);
    // if className is present then push into result array
    result.push(node);
    console.log('test push ' + JSON.stringify(result));
  }
  // check if it has child nodes with element.childNodes
  console.log('child after push' + node.childNodes);
  if (node.hasChildNodes) {
    // if child node is present iterate through child nodes
    var children = node.childNodes;
    console.log('children ' + JSON.stringify(children));
    for (var i = 0; i < children.length; i++) {
      //call function getElementsByClassName(className, element.childNode)
      result.push(getElementsByClassName(className, children[i]));
    }
  }
  // return result array
  console.log('result ' + result);
  return result;
  // your code here
};
