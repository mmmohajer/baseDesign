"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

require("./assets/styles/main.scss");

var _App = _interopRequireDefault(require("./App"));

var root = _client["default"].createRoot(document.querySelector('#app'));

root.render( /*#__PURE__*/_react["default"].createElement(_App["default"], null));
//# sourceMappingURL=index.js.map