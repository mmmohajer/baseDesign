"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function allowedKeys(sourceObject, keys) {
  var newObject = {};
  keys.forEach(function (key) {
    if (!!sourceObject[key]) {
      newObject[key] = sourceObject[key];
    }
  });
  return newObject;
}

var _default = allowedKeys;
exports["default"] = _default;
//# sourceMappingURL=allowedKeys.js.map