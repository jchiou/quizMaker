webpackHotUpdate(0,{

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Question/Answer view
	var QAView = function QAView(props) {
	  console.log(props);
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h2',
	      null,
	      props.props.Q
	    ),
	    _react2.default.createElement(
	      'h2',
	      null,
	      props.props.A
	    )
	  );
	};

	exports.default = QAView;

/***/ }

})