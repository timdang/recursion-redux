// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (Array.isArray(obj)) {
    var results = [];
    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }

    return '[' + results.join(',') + ']';
  }

  if (obj && typeof obj === 'object') {
    var results = [];
    for (var item in obj) {
      if (obj[item] === undefined || typeof obj[item] === 'function') {
        continue;
      }
      results.push(stringifyJSON(item) + ':' + stringifyJSON(obj[item]));
    }

    return '{' + results.join(',') + '}';
  }

  //string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //numbers
  return ''+obj;

};
