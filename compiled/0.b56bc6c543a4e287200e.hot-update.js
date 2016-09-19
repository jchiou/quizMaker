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
	    props.questions.map(function (question, i) {
	      return _react2.default.createElement(_QuestionView2.default, { question: question,
	        key: i,
	        trueFalse: props.trueFalse

	      });
	    })
	  );
	};

	exports.default = StudentView;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuestionView = function QuestionView(props) {
	  console.log('props is', props);
	  return _react2.default.createElement(
	    'div',
	    null,
	    'Question:',
	    _react2.default.createElement(
	      'h4',
	      null,
	      props.question.Q
	    ),
	    'Your answer:',
	    props.trueFalse ? _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'select',
	        { id: 'tf-answer' },
	        _react2.default.createElement(
	          'option',
	          null,
	          'True'
	        ),
	        _react2.default.createElement(
	          'option',
	          null,
	          'False'
	        )
	      )
	    ) : _react2.default.createElement('input', { type: 'text', value: props.tempA, onChange: props.setAnswer })
	  );
	};

	exports.default = QuestionView;

/***/ }

})