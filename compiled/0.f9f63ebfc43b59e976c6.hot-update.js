webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(1);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(166);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.querySelector('#app'));

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _TeacherView = __webpack_require__(173);

	var _TeacherView2 = _interopRequireDefault(_TeacherView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var fakeQs = [{ Q: 'What is the capital of California?', A: 'Sacramento' }, { Q: 'What is the capital of Delaware?', A: 'Wilmington' }];

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

	    _this.state = {
	      studentView: false,
	      trueFalse: false,
	      shortAnswer: false,
	      tempA: '',
	      selectValue: true,
	      tempQ: '',
	      questions: []
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'changeView',
	    value: function changeView() {
	      this.state.studentView ? this.setState({ studentView: false }) : this.setState({ studentView: true });
	    }
	    // set state to True/False 

	  }, {
	    key: 'setToTF',
	    value: function setToTF() {
	      this.setState({
	        trueFalse: true
	      });
	    }
	    // set state to Short Answer

	  }, {
	    key: 'setToSA',
	    value: function setToSA() {
	      this.setState({
	        shortAnswer: true
	      });
	    }
	  }, {
	    key: 'setTFAnswer',
	    value: function setTFAnswer(event) {
	      console.log('e.target.selectedOptions is', event.target.selectedOptions[computedName]);
	      this.setState({
	        selectValue: event.target.value,
	        tempA: event.target.value
	      });
	    }
	  }, {
	    key: 'setQuestion',
	    value: function setQuestion(event) {
	      this.setState({
	        tempQ: event.target.value
	      });
	    }
	    // sets answer as user types or chooses T/F

	  }, {
	    key: 'setAnswer',
	    value: function setAnswer(event) {
	      this.setState({
	        tempA: event.target.value
	      });
	    }
	    // finalizes Q/A into state

	  }, {
	    key: 'submit',
	    value: function submit() {
	      var questionCopy = this.state.questions.slice();
	      this.state.shortAnswer ? questionCopy.push({ Q: this.state.tempQ, A: this.state.tempA }) : questionCopy.push({ Q: this.state.tempQ, A: $('#tf').val() });
	      this.setState({
	        questions: questionCopy,
	        tempQ: '',
	        tempA: '',
	        selectValue: true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'changeView' },
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: this.changeView.bind(this) },
	            'Toggle View'
	          )
	        ),
	        this.state.studentView ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'QuizTaker'
	          )
	        ) : _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h1',
	            null,
	            'QuizMaker'
	          ),
	          _react2.default.createElement(_TeacherView2.default, {
	            submit: this.submit.bind(this),
	            setAnswer: this.setAnswer.bind(this),
	            setQuestion: this.setQuestion.bind(this),
	            setTFAnswer: this.setTFAnswer.bind(this),
	            setToSA: this.setToSA.bind(this),
	            setToTF: this.setToTF.bind(this)
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.querySelector('#app'));

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _QAView = __webpack_require__(175);

	var _QAView2 = _interopRequireDefault(_QAView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TeacherView = function (_Component) {
	  _inherits(TeacherView, _Component);

	  function TeacherView(props) {
	    _classCallCheck(this, TeacherView);

	    var _this = _possibleConstructorReturn(this, (TeacherView.__proto__ || Object.getPrototypeOf(TeacherView)).call(this, props));

	    _this.state = {
	      trueFalse: false,
	      shortAnswer: false,
	      tempA: '',
	      selectValue: true,
	      tempQ: '',
	      questions: []
	    };
	    return _this;
	  }

	  _createClass(TeacherView, [{
	    key: 'render',
	    value: function render() {
	      console.log(props);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'dropdown' },
	          _react2.default.createElement(
	            'button',
	            { className: 'btn btn-primary dropdown-toggle', type: 'button', 'data-toggle': 'dropdown' },
	            'Question Type',
	            _react2.default.createElement('span', { className: 'caret' })
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'dropdown-menu' },
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: '#', onClick: this.setToTF.bind(this) },
	                'T/F'
	              )
	            ),
	            _react2.default.createElement(
	              'li',
	              null,
	              _react2.default.createElement(
	                'a',
	                { href: '#', onClick: this.setToSA.bind(this) },
	                'Short Answer'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Question: '
	          ),
	          _react2.default.createElement('input', { type: 'text', value: this.state.tempQ, onChange: this.setQuestion.bind(this) }),
	          _react2.default.createElement(
	            'h5',
	            null,
	            'Answer: '
	          ),
	          this.state.trueFalse ? _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'select',
	              { id: 'tf' },
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
	          ) : _react2.default.createElement('input', { type: 'text', value: this.state.tempA, onChange: this.setAnswer.bind(this) })
	        ),
	        _react2.default.createElement(
	          'button',
	          { type: 'button', className: 'btn btn-default extraMarginTop', onClick: this.submit.bind(this) },
	          'Submit'
	        ),
	        _react2.default.createElement(
	          'div',
	          { id: 'questionList' },
	          this.state.questions.map(function (question, i) {
	            return _react2.default.createElement(_QAView2.default, { props: question, key: i });
	          })
	        )
	      );
	    }
	  }]);

	  return TeacherView;
	}(_react.Component);

	exports.default = TeacherView;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

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
	    "div",
	    { className: "prompt" },
	    _react2.default.createElement(
	      "h2",
	      null,
	      "Question: ",
	      props.props.Q
	    ),
	    _react2.default.createElement(
	      "h2",
	      null,
	      "Answer: ",
	      props.props.A
	    )
	  );
	};

	exports.default = QAView;

/***/ }

})