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
	      currentQ: 0
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
	      this.state.shortAnswer ? questionCopy.push({ Q: this.state.tempQ, A: this.state.tempA, shortAnswer: true }) : questionCopy.push({ Q: this.state.tempQ, A: $('#tf').val(), shortAnswer: false });
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
	      $('#tf-student').val;
	      console.log('answer is', answer);
	    }
	  }, {
	    key: 'handleShortAnswer',
	    value: function handleShortAnswer(event) {
	      // this will save short answers. 
	      var questions = this.state.questions;
	      var curr = this.state.currentQ;
	      var answeredCopy = this.state.answered.slice();
	      if (questions[curr].A.toLowerCase() === event.target.value.toLowerCase()) {
	        answeredCopy.push({ Q: questions[curr], Correct: true });
	      } else {
	        answeredCopy.push({ Q: questions[curr], Correct: false });
	      }
	      this.setState({
	        answered: answeredCopy
	      });
	      console.log('handling Short answer....state is now', this.state.answered);
	    }
	  }, {
	    key: 'nextQ',
	    value: function nextQ() {
	      // save answer
	      // this.state.questions[this.state.currentQ].shortAnswer ? 

	      this.setState({ currentQ: this.state.currentQ + 1 });
	    }
	  }, {
	    key: 'prevQ',
	    value: function prevQ() {
	      // save answer
	      this.setState({ currentQ: this.state.currentQ - 1 });
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
	            nextQ: this.nextQ.bind(this),
	            prevQ: this.prevQ.bind(this),
	            submitAnswer: this.submitAnswer.bind(this),
	            saveShortAnswer: this.saveShortAnswer.bind(this),
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

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(167);

	var _react2 = _interopRequireDefault(_react);

	var _QAView = __webpack_require__(175);

	var _QAView2 = _interopRequireDefault(_QAView);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TeacherView = function TeacherView(props) {

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
	            { href: '#', onClick: props.setToTF },
	            'T/F'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: props.setToSA },
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
	      _react2.default.createElement('input', { type: 'text', value: props.tempQ, onChange: props.setQuestion }),
	      _react2.default.createElement(
	        'h5',
	        null,
	        'Answer: '
	      ),
	      props.trueFalse ? _react2.default.createElement(
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
	      ) : _react2.default.createElement('input', { type: 'text', value: props.tempA, onChange: props.setAnswer })
	    ),
	    _react2.default.createElement(
	      'button',
	      { type: 'button', className: 'btn btn-default extraMarginTop', onClick: props.submit },
	      'Submit'
	    ),
	    _react2.default.createElement(
	      'div',
	      { id: 'questionList' },
	      props.questions.map(function (question, i) {
	        return _react2.default.createElement(_QAView2.default, { props: question, key: i });
	      })
	    )
	  );
	};

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

/***/ },

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
	      handleShortAnswer: props.saveShortAnswer,
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

/***/ },

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
	      props.question.shortAnswer ? _react2.default.createElement("input", { type: "text", value: props.tempA, onChange: props.handleShortAnswer }) : _react2.default.createElement(
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