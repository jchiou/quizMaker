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

	var _Score = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Score\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Score2 = _interopRequireDefault(_Score);

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
	    props.showScore ? _react2.default.createElement(_Score2.default, null) : _react2.default.createElement(_QuestionView2.default, { question: props.questions[props.currentQ],
	      questions: props.questions,
	      key: props.currentQ,
	      currentQ: props.currentQ,
	      submitAnswer: props.submitAnswer,
	      nextQ: props.nextQ,
	      prevQ: props.prevQ,
	      showScore: props.showScore,
	      score: props.score
	    }),
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