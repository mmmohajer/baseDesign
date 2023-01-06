"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var css = function css(cssConfig, containerUID, percentage) {
  var seg_0_90_percentage = 90;
  var seg_90_180_percentage = 90;
  var seg_180_270_percentage = 90;
  var seg_270_360_percentage = 90;

  if (percentage < 25) {
    seg_0_90_percentage = 90 - percentage / 100 * 360;
  } else if (25 <= percentage && percentage < 50) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 90 - -(25 - percentage) / 100 * 360;
  } else if (50 <= percentage && percentage < 75) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 0;
    seg_180_270_percentage = 90 - -(50 - percentage) / 100 * 360;
  } else if (75 <= percentage) {
    seg_0_90_percentage = 0;
    seg_90_180_percentage = 0;
    seg_180_270_percentage = 0;
    seg_270_360_percentage = 90 - -(75 - percentage) / 100 * 360;
  }

  return "\n        .".concat(containerUID, "-seg-0-90 {\n            transform: rotate(0deg) skew(").concat(seg_0_90_percentage, "deg);\n            background-color: ").concat(cssConfig['seg_0_90_bgColor'], ";\n        }\n        .").concat(containerUID, "-seg-90-180 {\n            transform: rotate(90deg) skew(").concat(seg_90_180_percentage, "deg);\n            background-color: ").concat(cssConfig['seg_90_180_bgColor'], ";\n        }\n        .").concat(containerUID, "-seg-180-270 {\n            transform: rotate(180deg) skew(").concat(seg_180_270_percentage, "deg);\n            background-color: ").concat(cssConfig['seg_180_270_bgColor'], ";\n        }\n        .").concat(containerUID, "-seg-270-360 {\n            transform: rotate(270deg) skew(").concat(seg_270_360_percentage, "deg);\n            background-color: ").concat(cssConfig['seg_270_360_bgColor'], ";\n        }\n        .").concat(containerUID, "-outer-circle {\n            width: ").concat(cssConfig['outer_circle_size'], "px;\n            height: ").concat(cssConfig['outer_circle_size'], "px;\n            background-color: ").concat(cssConfig['outer_circle_background_color'], ";\n        }\n        .").concat(containerUID, "-inner-circle {\n            width: ").concat(cssConfig['inner_circle_size'], "px;\n            height: ").concat(cssConfig['inner_circle_size'], "px;\n            background-color: ").concat(cssConfig['inner_circle_background_color'], ";\n        }");
};

exports.css = css;
//# sourceMappingURL=styles.js.map