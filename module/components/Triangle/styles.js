"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.css = void 0;

var css = function css(cssConfig, containerUID) {
  if (cssConfig['direction'] === 'up') {
    return "\n        .".concat(containerUID, "-triangleContainer {\n            width: 0;\n            height: 0;\n            border-left: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-right: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-bottom: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " ").concat(cssConfig['color'], ";\n    }");
  } else if (cssConfig['direction'] === 'down') {
    return "\n        .".concat(containerUID, "-triangleContainer {\n            width: 0;\n            height: 0;\n            border-left: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-right: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-top: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " ").concat(cssConfig['color'], ";\n    }");
  } else if (cssConfig['direction'] === 'right') {
    return "\n        .".concat(containerUID, "-triangleContainer {\n            width: 0;\n            height: 0;\n            border-top: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-bottom: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-left: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " ").concat(cssConfig['color'], ";\n    }");
  } else if (cssConfig['direction'] === 'left') {
    return "\n        .".concat(containerUID, "-triangleContainer {\n            width: 0;\n            height: 0;\n            border-top: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-bottom: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " transparent;\n            border-right: ").concat(cssConfig['size'], "px ").concat(cssConfig['borderType'], " ").concat(cssConfig['color'], ";\n    }");
  }
};

exports.css = css;
//# sourceMappingURL=styles.js.map