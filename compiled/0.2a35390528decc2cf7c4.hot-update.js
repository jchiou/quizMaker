webpackHotUpdate(0,{

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
	      tempQ: '',
	      questions: []
	    };
	    return _this;
	  }

	  // set state to True/False 


	  _createClass(TeacherView, [{
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
	    // sets temp T/F answer 

	  }, {
	    key: 'setAnswerT',
	    value: function setAnswerT() {
	      this.setState({
	        tempA: true
	      });
	    }
	  }, {
	    key: 'setAnswerF',
	    value: function setAnswerF() {
	      this.setState({
	        tempA: false
	      });
	    }
	    // sets temp question as user types

	  }, {
	    key: 'setQuestion',
	    value: function setQuestion(event) {
	      this.setState({
	        tempQ: event.target.value
	      });
	    }
	    // sets short answer as user types

	  }, {
	    key: 'setSA',
	    value: function setSA(event) {
	      this.setState({
	        tempA: event.target.value
	      });
	    }

	    // finalizes Q/A into state

	  }, {
	    key: 'submit',
	    value: function submit() {
	      var questionCopy = this.state.questions.slice();
	      questionCopy.push({ Q: this.state.tempQ, A: this.state.tempA });
	      this.setState({
	        questions: questionCopy,
	        tempQ: '',
	        tempA: ''
	      });
	      console.log('new question added:', this.state.questions);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
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
	              'div',
	              { className: 'dropdown' },
	              _react2.default.createElement(
	                'button',
	                { className: 'btn btn-primary dropdown-toggle', type: 'button', 'data-toggle': 'dropdown' },
	                'Pick the correct answer',
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
	                    { href: '#', onClick: this.setAnswerT.bind(this) },
	                    'True'
	                  )
	                ),
	                _react2.default.createElement(
	                  'li',
	                  null,
	                  _react2.default.createElement(
	                    'a',
	                    { href: '#', onClick: this.setAnswerF.bind(this) },
	                    'False'
	                  )
	                )
	              )
	            )
	          ) : _react2.default.createElement('input', { type: 'text', value: this.state.tempA, onChange: this.setSA.bind(this) })
	        ),
	        _react2.default.createElement(
	          'button',
	          { type: 'button', className: 'btn btn-default', onClick: this.submit.bind(this) },
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

/***/ }

})