webpackHotUpdate(0,{

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuestionView = function QuestionView(props) {

	  return _react2.default.createElement(
	    "div",
	    null,
	    _react2.default.createElement(
	      "div",
	      { className: "prompt" },
	      "Question:",
	      _react2.default.createElement(
	        "h4",
	        null,
	        props.question.Q
	      ),
	      "Your answer:",
	      props.trueFalse ? _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "select",
	          { id: "tf-student" },
	          _react2.default.createElement(
	            "option",
	            null,
	            "True"
	          ),
	          _react2.default.createElement(
	            "option",
	            null,
	            "False"
	          )
	        )
	      ) : _react2.default.createElement("input", { type: "text", value: props.tempA, onChange: props.setAnswer })
	    ),
	    _react2.default.createElement(
	      "button",
	      { type: "button", className: "btn btn-default extraMarginTop", onClick: props.submitAnswer },
	      "Submit"
	    )
	  );
	};

	exports.default = QuestionView;

/***/ }

})