webpackHotUpdate(0,{

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _QuestionView = __webpack_require__(177);

	var _QuestionView2 = _interopRequireDefault(_QuestionView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StudentView = function StudentView(props) {

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Good luck!'
	    ),
	    props.questions.length > 0 ? _react2.default.createElement(_QuestionView2.default, { question: props.questions[props.currentQ],
	      questions: props.questions,
	      key: props.currentQ,
	      currentQ: props.currentQ,
	      submitAnswer: props.submitAnswer,
	      nextQ: props.nextQ,
	      prevQ: props.prevQ
	    }) : null,
	    _react2.default.createElement(
	      'div',
	      { className: 'questionCount' },
	      props.currentQ + 1,
	      ' / ',
	      props.questions.length
	    )
	  );
	};

	exports.default = StudentView;

/***/ }

})