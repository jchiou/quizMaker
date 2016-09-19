webpackHotUpdate(0,{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//stateless component
	var TeacherView = function TeacherView(props) {
	  return _react2.default.createElement(
	    'ul',
	    null,
	    props.questions.map(function (question) {
	      return _react2.default.createElement(
	        'li',
	        null,
	        'question.question'
	      );
	    })
	  );
	};

	exports.default = TeacherView;

/***/ }

})