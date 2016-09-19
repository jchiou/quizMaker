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
	      studentView: false
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
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
	          _react2.default.createElement(_TeacherView2.default, null)
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

	var _reactReorder = __webpack_require__(174);

	var _reactReorder2 = _interopRequireDefault(_reactReorder);

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
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                'h2',
	                null,
	                ' Question: ',
	                question.Q
	              ),
	              _react2.default.createElement(
	                'h2',
	                null,
	                ' Answer: ',
	                question.A
	              )
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return TeacherView;
	}(_react.Component);

	exports.default = TeacherView;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	(function () {
	  'use strict';

	  var getReorderComponent = function (React, ReactDOM) {

	    return React.createClass({
	      displayName: 'Reorder',
	      nonCollisionElement: new RegExp('(^|\\s)(placeholder|dragged)($|\\s)', ''),
	      constants: {
	        HOLD_THRESHOLD: 8,
	        SCROLL_RATE: 1000 / 60,
	        SCROLL_DISTANCE: 1,
	        SCROLL_AREA: 50,
	        SCROLL_MULTIPLIER: 5
	      },
	      preventDefault: function (event) {
	        event.preventDefault();
	      },
	      handleTouchEvents: function (event) {
	        if (event.touches && event.touches.length) {
	          event.clientX = event.touches[0].clientX;
	          event.clientY = event.touches[0].clientY;
	        }
	      },
	      startDrag: function (dragOffset, draggedStyle) {
	        if (!this.props.disableReorder) {
	          this.setState({
	            dragOffset: dragOffset,
	            draggedStyle: draggedStyle,
	            originalPosition: draggedStyle,
	            held: true,
	            moved: false
	          });
	        }
	      },
	      itemDown: function (item, index, event) {
	        this.handleTouchEvents(event);

	        var self = this;
	        var target = event.currentTarget;
	        var rect = target.getBoundingClientRect();

	        this.setState({
	          held: false,
	          moved: false
	        });

	        var dragOffset = {
	          top: event.clientY - rect.top,
	          left: event.clientX - rect.left
	        };

	        this.setState({
	          dragged: {
	            target: target,
	            item: item,
	            index: index
	          }
	        });

	        var draggedStyle = {
	          position: 'fixed',
	          top: rect.top,
	          left: rect.left,
	          width: rect.width,
	          height: rect.height
	        };

	        // Timeout if holdTime is defined
	        var holdTime = Math.abs(parseInt(this.props.holdTime));

	        if (holdTime) {
	          this.holdTimeout = setTimeout(function () {
	            self.startDrag(dragOffset, draggedStyle);
	          }, holdTime);
	        } else {
	          self.startDrag(dragOffset, draggedStyle);
	        }
	      },
	      listDown: function (event) {
	        this.handleTouchEvents(event);

	        var self = this;

	        var downPos = {
	          clientY: event.clientY,
	          clientX: event.clientX,
	          scrollTop: ReactDOM.findDOMNode(self).scrollTop,
	          scrollLeft: ReactDOM.findDOMNode(self).scrollLeft
	        };

	        this.setState({
	          downPos: downPos,
	          pointer: {
	            clientY: downPos.clientY,
	            clientX: downPos.clientX
	          },
	          velocity: {
	            y: 0,
	            x: 0
	          },
	          movedALittle: false
	        });

	        // Mouse events
	        window.addEventListener('mouseup', this.onMouseUp); // Mouse up
	        window.addEventListener('mousemove', this.onMouseMove); // Mouse move

	        // Touch events
	        window.addEventListener('touchend', this.onMouseUp); // Touch up
	        window.addEventListener('touchmove', this.onMouseMove); // Touch move

	        window.addEventListener('contextmenu', this.preventDefault);
	      },
	      onMouseUp: function (event) {
	        if (event.type.indexOf('touch') >= 0 && !this.state.movedALittle) {
	          event.preventDefault();
	        }

	        // Item clicked
	        if (typeof this.props.itemClicked === 'function' && !this.state.held && !this.state.moved && this.state.dragged) {
	          this.props.itemClicked(event, this.state.dragged.item, this.state.dragged.index);
	        }

	        // Reorder callback
	        if (this.state.held && this.state.dragged && typeof this.props.callback === 'function') {
	          var listElements = this.nodesToArray(ReactDOM.findDOMNode(this).childNodes);
	          var newIndex = listElements.indexOf(this.state.dragged.target);

	          this.props.callback(event, this.state.dragged.item, this.state.dragged.index, newIndex, this.state.list);
	        }

	        this.setState({
	          dragged: undefined,
	          draggedStyle: undefined,
	          dragOffset: undefined,
	          originalPosition: undefined,
	          downPos: undefined,
	          held: false,
	          moved: false
	        });

	        clearTimeout(this.holdTimeout);
	        clearInterval(this.scrollIntervalY);
	        this.scrollIntervalY = undefined;
	        clearInterval(this.scrollIntervalX);
	        this.scrollIntervalX = undefined;

	        // Mouse events
	        window.removeEventListener('mouseup', this.onMouseUp); // Mouse up
	        window.removeEventListener('mousemove', this.onMouseMove); // Mouse move
	        // Touch events
	        window.removeEventListener('touchend', this.onMouseUp); // Touch up
	        window.removeEventListener('touchmove', this.onMouseMove); // Touch move

	        window.removeEventListener('contextmenu', this.preventDefault);
	      },
	      getScrollArea: function (value) {
	        return Math.max(Math.min(value / 4, this.constants.SCROLL_AREA), this.constants.SCROLL_AREA / 5);
	      },
	      dragScrollY: function () {
	        var element = ReactDOM.findDOMNode(this);
	        var rect = element.getBoundingClientRect();
	        var scrollArea = this.getScrollArea(rect.height);

	        var distanceInArea;
	        if (this.state.pointer.clientY < rect.top + scrollArea) {
	          distanceInArea = Math.min((rect.top + scrollArea) - this.state.pointer.clientY, scrollArea * 2);
	          element.scrollTop -= distanceInArea / this.constants.SCROLL_MULTIPLIER;
	        } else if (this.state.pointer.clientY > rect.bottom - scrollArea) {
	          distanceInArea = Math.min(this.state.pointer.clientY - (rect.bottom - scrollArea), scrollArea * 2);
	          element.scrollTop += distanceInArea / this.constants.SCROLL_MULTIPLIER;
	        }
	      },
	      dragScrollX: function () {
	        var element = ReactDOM.findDOMNode(this);
	        var rect = element.getBoundingClientRect();
	        var scrollArea = this.getScrollArea(rect.width);

	        var distanceInArea;
	        if (this.state.pointer.clientX < rect.left + scrollArea) {
	          distanceInArea = Math.min((rect.left + scrollArea) - this.state.pointer.clientX, scrollArea * 2);
	          element.scrollLeft -= distanceInArea / this.constants.SCROLL_MULTIPLIER;
	        } else if (this.state.pointer.clientX > rect.right - scrollArea) {
	          distanceInArea = Math.min(this.state.pointer.clientX - (rect.right - scrollArea), scrollArea * 2);
	          element.scrollLeft += distanceInArea / this.constants.SCROLL_MULTIPLIER;
	        }
	      },
	      handleDragScrollY: function (event) {
	        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

	        if (!this.scrollIntervalY && this.props.lock !== 'vertical') {
	          if (event.clientY < rect.top + this.constants.SCROLL_AREA) {
	            this.scrollIntervalY = setInterval(this.dragScrollY, this.constants.SCROLL_RATE);
	          } else if (event.clientY > rect.bottom - this.constants.SCROLL_AREA) {
	            this.scrollIntervalY = setInterval(this.dragScrollY, this.constants.SCROLL_RATE);
	          }
	        } else {
	          if (event.clientY <= rect.bottom - this.constants.SCROLL_AREA && event.clientY >= rect.top + this.constants.SCROLL_AREA) {
	            clearInterval(this.scrollIntervalY);
	            this.scrollIntervalY = undefined;
	          }
	        }
	      },
	      handleDragScrollX: function (event) {
	        var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

	        if (!this.scrollIntervalX && this.props.lock !== 'horizontal') {
	          if (event.clientX < rect.left + this.constants.SCROLL_AREA) {
	            this.scrollIntervalX = setInterval(this.dragScrollX, this.constants.SCROLL_RATE);
	          } else if (event.clientX > rect.right - this.constants.SCROLL_AREA) {
	            this.scrollIntervalX = setInterval(this.dragScrollX, this.constants.SCROLL_RATE);
	          }
	        } else {
	          if (event.clientX <= rect.right - this.constants.SCROLL_AREA && event.clientX >= rect.left + this.constants.SCROLL_AREA) {
	            clearInterval(this.scrollIntervalX);
	            this.scrollIntervalX = undefined;
	          }
	        }
	      },
	      onMouseMove: function (event) {
	        this.handleTouchEvents(event);

	        var pointer = {
	          clientY: event.clientY,
	          clientX: event.clientX
	        };

	        this.setState({
	          pointer: pointer,
	          velocity: {
	            y: this.state.pointer.clientY - event.clientY,
	            x: this.state.pointer.clientX - event.clientX
	          },
	          movedALittle: true
	        });

	        if (this.state.held && this.state.dragged) {
	          event.preventDefault();
	          this.setDraggedPosition(event);

	          var listElements = this.nodesToArray(ReactDOM.findDOMNode(this).childNodes);
	          var collision = this.findCollision(listElements, event);

	          if (collision) {
	            var previousIndex = listElements.indexOf(this.state.dragged.target);
	            var newIndex = listElements.indexOf(collision);

	            this.state.list.splice(newIndex, 0, this.state.list.splice(previousIndex, 1)[0]);
	            this.setState({list: this.state.list});
	          }

	          this.handleDragScrollY(event);
	          this.handleDragScrollX(event);
	        } else {
	          if (this.state.downPos) {
	            // Cancel hold if mouse has moved
	            if (this.xHasMoved(event) || this.yHasMoved(event)) {
	              clearTimeout(this.holdTimeout);
	              this.setState({moved: true});
	            }
	          }
	        }
	      },
	      xHasMoved: function (event) {
	        return Math.abs(this.state.downPos.clientX - event.clientX) > this.constants.HOLD_THRESHOLD;
	      },
	      yHasMoved: function (event) {
	        return Math.abs(this.state.downPos.clientY - event.clientY) > this.constants.HOLD_THRESHOLD;
	      },
	      elementHeightMinusBorders: function (element) {
	        var rect = element.getBoundingClientRect();
	        var computedStyle;

	        if (getComputedStyle) {
	          computedStyle = getComputedStyle(element);
	        } else {
	          computedStyle = element.currentStyle;
	        }

	        return rect.height -
	          parseInt(computedStyle.getPropertyValue('border-top-width') || computedStyle.borderTopWidth) -
	          parseInt(computedStyle.getPropertyValue('border-bottom-width') || computedStyle.borderBottomWidth);
	      },
	      elementWidthMinusBorders: function (element) {
	        var rect = element.getBoundingClientRect();
	        var computedStyle;

	        if (getComputedStyle) {
	          computedStyle = getComputedStyle(element);
	        } else {
	          computedStyle = element.currentStyle;
	        }

	        return rect.width -
	          parseInt(computedStyle.getPropertyValue('border-left-width') || computedStyle.borderLeftWidth) -
	          parseInt(computedStyle.getPropertyValue('border-right-width') || computedStyle.borderRightWidth);
	      },
	      setDraggedPosition: function (event) {
	        var draggedStyle = {
	          position: this.state.draggedStyle.position,
	          top: this.state.draggedStyle.top,
	          left: this.state.draggedStyle.left,
	          width: this.state.draggedStyle.width,
	          height: this.state.draggedStyle.height
	        };

	        if (this.props.lock === 'horizontal') {
	          draggedStyle.top = event.clientY - this.state.dragOffset.top;
	          draggedStyle.left = this.state.originalPosition.left;
	        } else if (this.props.lock === 'vertical') {
	          draggedStyle.top = this.state.originalPosition.top;
	          draggedStyle.left = event.clientX - this.state.dragOffset.left;
	        } else {
	          draggedStyle.top = event.clientY - this.state.dragOffset.top;
	          draggedStyle.left = event.clientX - this.state.dragOffset.left;
	        }

	        this.setState({draggedStyle: draggedStyle});
	      },

	      // Collision methods

	      nodesToArray: function (nodes) {
	        return Array.prototype.slice.call(nodes, 0);
	      },
	      xCollision: function (rect, event) {
	        return event.clientX >= rect.left && event.clientX <= rect.right;
	      },
	      yCollision: function (rect, event) {
	        return event.clientY >= rect.top && event.clientY <= rect.bottom;
	      },
	      findCollision: function (listElements, event) {
	        for (var i = 0; i < listElements.length; i += 1) {
	          if (!this.nonCollisionElement.exec(listElements[i].className)) {
	            var rect = listElements[i].getBoundingClientRect();

	            if (this.props.lock === 'horizontal') {
	              if (this.yCollision(rect, event)) {
	                return listElements[i];
	              }
	            } else if (this.props.lock === 'vertical') {
	              if (this.xCollision(rect, event)) {
	                return listElements[i];
	              }
	            } else {
	              if (this.yCollision(rect, event)) {
	                if (this.xCollision(rect, event)) {
	                  return listElements[i];
	                }
	              }
	            }

	          }
	        }

	        return undefined;
	      },

	      // ---- View methods

	      getDraggedStyle: function (item) {
	        if (this.state.held && this.state.dragged && this.state.dragged.item === item) {
	          return this.state.draggedStyle;
	        }
	        return undefined;
	      },
	      getDraggedClass: function (item) {
	        if (this.state.held && this.state.dragged && this.state.dragged.item === item) {
	          return 'dragged';
	        }
	        return undefined;
	      },
	      getPlaceholderClass: function (item) {
	        if (this.state.held && this.state.dragged && this.state.dragged.item === item) {
	          return 'placeholder';
	        }
	        return undefined;
	      },
	      getSelectedClass: function (item) {
	        if (typeof this.props.selected !== 'undefined') {
	          if (typeof this.props.selectedKey !== 'undefined') {
	            return this.props.selected[this.props.selectedKey] === item[this.props.selectedKey] ? 'selected' : undefined;
	          }
	          return this.props.selected === item ? 'selected' : undefined;
	        }
	        return undefined;
	      },

	      // ---- Default methods

	      componentWillUnmount: function () {
	        clearTimeout(this.holdTimeout);

	        clearInterval(this.scrollIntervalY);
	        this.scrollIntervalY = undefined;
	        clearInterval(this.scrollIntervalX);
	        this.scrollIntervalX = undefined;
	      },
	      componentWillReceiveProps: function (props) {
	        // Updates list when props changed
	        this.setState({
	          list: props.list
	        });
	      },
	      getInitialState: function () {
	        return {
	          list: this.props.list || []
	        };
	      },
	      render: function () {
	        var self = this;

	        var getPropsTemplate = function (item) {
	          if (self.props.template) {
	            return React.createElement(self.props.template, {
	              item: item,
	              sharedProps: self.props.sharedProps
	            });
	          }
	          return item;
	        };

	        var list = this.state.list.map(function (item, index) {
	          var itemKey = item[self.props.itemKey] || item;
	          var itemClass = [self.props.itemClass, self.getPlaceholderClass(item), self.getSelectedClass(item)].join(' ');
	          return React.createElement('div', {
	            key: itemKey,
	            className: itemClass,
	            onMouseDown: self.itemDown.bind(self, item, index),
	            onTouchStart: self.itemDown.bind(self, item, index),
	          }, getPropsTemplate(item));
	        });

	        var targetClone = function () {
	          if (self.state.held && self.state.dragged) {
	            var itemKey = self.state.dragged.item[self.props.itemKey] || self.state.dragged.item;
	            var itemClass = [self.props.itemClass, self.getDraggedClass(self.state.dragged.item), self.getSelectedClass(self.state.dragged.item)].join(' ');
	            return React.createElement('div', {
	              key: itemKey,
	              className: itemClass,
	              style: self.getDraggedStyle(self.state.dragged.item)
	            }, getPropsTemplate(self.state.dragged.item));
	          }
	          return undefined;
	        };

	        return React.createElement('div', {
	          className: this.props.listClass,
	          onMouseDown: self.listDown,
	          onTouchStart: self.listDown
	        }, list, targetClone());
	      }
	    });

	  };

	  // Export for commonjs / browserify
	  if (true) {
	    var React = __webpack_require__(167);
	    var ReactDOM = __webpack_require__(1);
	    module.exports = getReorderComponent(React, ReactDOM);
	  // Export for amd / require
	  } else if (typeof define === 'function' && define.amd) { // eslint-disable-line no-undef
	    define(['react', 'react-dom'], function (React, ReactDOM) { // eslint-disable-line no-undef
	      return getReorderComponent(React, ReactDOM);
	    });
	  // Export globally
	  } else {
	    var root;

	    if (typeof window !== 'undefined') {
	      root = window;
	    } else if (typeof global !== 'undefined') {
	      root = global;
	    } else if (typeof self !== 'undefined') {
	      root = self;
	    } else {
	      root = this;
	    }

	    root.Reorder = getReorderComponent(root.React, root.ReactDOM);
	  }

	})();


/***/ }

})