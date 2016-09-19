webpackHotUpdate(0,{

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

	var _StudentView = __webpack_require__(176);

	var _StudentView2 = _interopRequireDefault(_StudentView);

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
	      shortAnswer: true,
	      tempA: '',
	      tempQ: '',
	      questions: [],
	      answered: [],
	      currentQ: null
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
	        trueFalse: true,
	        shortAnswer: false
	      });
	    }
	    // set state to Short Answer

	  }, {
	    key: 'setToSA',
	    value: function setToSA() {
	      this.setState({
	        shortAnswer: true,
	        trueFalse: false
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
	    // Functions for student view

	  }, {
	    key: 'submitAnswer',
	    value: function submitAnswer(answer) {
	      console.log('answer is', answer);
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
	          ),
	          _react2.default.createElement(_StudentView2.default, {
	            submitAnswer: this.submitAnswer.bind(this),
	            trueFalse: this.state.trueFalse,
	            questions: this.state.questions,
	            answered: this.state.answered,
	            currentQ: this.state.currentQ
	          })
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
	            setToSA: this.setToSA.bind(this),
	            setToTF: this.setToTF.bind(this),
	            tempQ: this.state.tempQ,
	            tempA: this.state.tempA,
	            questions: this.state.questions,
	            trueFalse: this.state.trueFalse,
	            shortAnswer: this.state.shortAnswer
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;


	ReactDOM.render(_react2.default.createElement(App, null), document.querySelector('#app'));

/***/ }

})