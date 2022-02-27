// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  // If Obj is a Number
  if (typeof obj === 'number') {
    result += obj;
    return result;
  }
  // If obj is null
  if (obj === null) {
    result += obj;
    return result;
  }
  // If obj is boolean
  if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }
  // If obj is a string
  if (typeof obj === 'string') {
    result += '"' + obj + '"';
    return result;
  }
  if (Array.isArray(obj)) {
    // var resultArray = [];
    if (obj.length === 0) {
      return '[]';
    } else if (obj.length === 1) {
      return result += '[' + stringifyJSON(obj[0]) + ']';
    } else {
      result += '[';
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          result += stringifyJSON(obj[i]) + ']';
        } else {
          result += stringifyJSON(obj[i]) + ',';
        }
      }
      return result;
    }
  }
  if (typeof obj === 'object' ) {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else if (Object.keys(obj).length === 1) {
      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined || key === undefined) {

        } else {
          return result += '{' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + '}';
        }
      }
    } else {
      result += '{';
      for (var key in obj) {
        if (typeof obj[key] === 'function' || obj[key] === undefined || key === undefined) {

        } else {
          result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
        }
      }
      if (result.length > 1) {
        result = result.slice(0, result.length - 1);
      }
      result += '}';
      return result;
    }
  }
  // If obj is an empty array
};
