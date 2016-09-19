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

	var _Score = __webpack_require__(178);

	var _Score2 = _interopRequireDefault(_Score);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var StudentView = function StudentView(props) {
	  if (props.showScore) {
	    _react2.default.createElement(_Score2.default, null);
	  } else {
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
	        prevQ: props.prevQ,
	        score: props.score
	      }) : null,
	      _react2.default.createElement(
	        'div',
	        { className: 'questionCount' },
	        props.currentQ + 1,
	        ' / ',
	        props.questions.length
	      )
	    );
	  }
	};

	exports.default = StudentView;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Score = function Score(props) {
	  return _react2.default.createElement(
	    'h3',
	    null,
	    'Your score is: ',
	    props.score,
	    ' / ',
	    props.questions.length
	  );
	};

	exports.default = Score;

/***/ }

})