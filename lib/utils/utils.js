"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showInCssClass = exports.randomStr = void 0;

var randomStr = function randomStr(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

exports.randomStr = randomStr;

var showInCssClass = function showInCssClass(type, showIn) {
  if (showIn.includes("xs") && showIn.includes("sm") && showIn.includes("md") && showIn.includes("lg")) {
    return "";
  } else if (!showIn.includes("xs") && showIn.includes("sm") && showIn.includes("md") && showIn.includes("lg")) {
    return "show-".concat(type, "-in-sm-md-lg");
  } else if (!showIn.includes("xs") && !showIn.includes("sm") && showIn.includes("md") && showIn.includes("lg")) {
    return "show-".concat(type, "-in-md-lg");
  } else if (!showIn.includes("xs") && !showIn.includes("sm") && !showIn.includes("md") && showIn.includes("lg")) {
    return "show-".concat(type, "-in-lg");
  } else if (showIn.includes("xs") && showIn.includes("sm") && showIn.includes("md") && !showIn.includes("lg")) {
    return "show-".concat(type, "-in-md-sm-xsm");
  } else if (showIn.includes("xs") && showIn.includes("sm") && !showIn.includes("md") && !showIn.includes("lg")) {
    return "show-".concat(type, "-in-sm-xsm");
  } else if (showIn.includes("xs") && !showIn.includes("sm") && !showIn.includes("md") && !showIn.includes("lg")) {
    return "show-".concat(type, "-in-xsm");
  } else {
    console.log("Please enter only one of the following values for the showIn prop:\n    [\"xs\", \"sm\", \"md\", \"lg\"],\n    [\"xs\", \"sm\", \"md\"],\n    [\"xs\", \"sm\"],\n    [\"xs\"],\n    [\"sm\", \"md\", \"lg\"],\n    [\"md\", \"lg\"],\n    [\"lg\"],\n      ");
  }
};

exports.showInCssClass = showInCssClass;
//# sourceMappingURL=utils.js.map