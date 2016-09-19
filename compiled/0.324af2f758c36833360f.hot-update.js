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
	      props.question.shortAnswer ? _react2.default.createElement("input", { type: "text", value: props.tempA, onChange: props.setAnswer }) : _react2.default.createElement(
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
	      )
	    ),
	    props.currentQ > 0 ? _react2.default.createElement(
	      "button",
	      { type: "button", className: "btn btn-default extraMarginTop floatLeft", onClick: props.prevQ },
	      "Prev"
	    ) : null,
	    props.currentQ < props.questions.length - 1 ? _react2.default.createElement(
	      "button",
	      { type: "button", className: "btn btn-default extraMarginTop floatRight", onClick: props.nextQ },
	      "Next"
	    ) : null,
	    props.currentQ === props.questions.length - 1 ? _react2.default.createElement(
	      "button",
	      { type: "button", className: "btn btn-primary extraMarginTop floatRight", onClick: props.submitAnswer },
	      "Submit"
	    ) : null
	  );
	};

	exports.default = QuestionView;

/***/ }

})