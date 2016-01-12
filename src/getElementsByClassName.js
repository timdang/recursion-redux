// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, results) {

  var item, children;
  node = node || document.body;
  results = results || [];

  if (node.classList && node.classList.contains(className)) {
    results.push(node);
  }

  children = node.childNodes;

  if (children) {
    for (item in children) {
      if (typeof children[item] === 'object') {
        getElementsByClassName(className, children[item], results);
      }
    }
  }

  return results;

};
