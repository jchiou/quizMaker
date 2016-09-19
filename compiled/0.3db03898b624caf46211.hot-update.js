webpackHotUpdate(0,{

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _QuestionView = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./QuestionView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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
	    props.questions.map(function (question) {
	      return _react2.default.createElement(_QuestionView2.default, { question: question });
	    })
	  );
	};

	exports.default = StudentView;

/***/ }

})