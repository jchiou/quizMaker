webpackHotUpdate(0,{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//stateless component - however, might need to be stateful.
	var TeacherView = function TeacherView(props) {
	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "dropdown" },
	      _react2.default.createElement(
	        "button",
	        { className: "btn btn-primary dropdown-toggle", type: "button", "data-toggle": "dropdown" },
	        "Dropdown Example",
	        _react2.default.createElement("span", { className: "caret" })
	      ),
	      _react2.default.createElement(
	        "ul",
	        { className: "dropdown-menu" },
	        _react2.default.createElement(
	          "li",
	          null,
	          "True/False"
	        ),
	        _react2.default.createElement(
	          "li",
	          null,
	          "Short answer"
	        )
	      )
	    )
	  );
	};

	exports.default = TeacherView;

/***/ }

})