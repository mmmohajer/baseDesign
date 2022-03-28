"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showInCssClass = void 0;

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
    console.log("Please enter only one of the following values for the showIn prop in Div component:\n    [\"xs\", \"sm\", \"md\", \"lg\"],\n    [\"xs\", \"sm\", \"md\"],\n    [\"xs\", \"sm\"],\n    [\"xs\"],\n    [\"sm\", \"md\", \"lg\"],\n    [\"md\", \"lg\"],\n    [\"lg\"],\n      ");
  }
};

exports.showInCssClass = showInCssClass;
//# sourceMappingURL=utils.js.map