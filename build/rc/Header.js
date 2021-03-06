'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var value = props.value,
        format = props.format;

    _this.state = {
      str: value && value.format(format) || '',
      invalid: false
    };
    return _this;
  }

  Header.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var focusOnOpen = this.props.focusOnOpen;

    if (focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      var requestAnimationFrame = window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(function () {
        _this2.refInput.focus();
        _this2.refInput.select();
      });
    }
  };

  Header.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        format = nextProps.format;

    this.setState({
      str: value && value.format(format) || '',
      invalid: false
    });
  };

  Header.prototype.getProtoValue = function getProtoValue() {
    var _props = this.props,
        value = _props.value,
        defaultOpenValue = _props.defaultOpenValue;

    return value || defaultOpenValue;
  };

  Header.prototype.getInput = function getInput() {
    var _this3 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        placeholder = _props2.placeholder,
        inputReadOnly = _props2.inputReadOnly;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2["default"].createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: function ref(_ref) {
        _this3.refInput = _ref;
      },
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder,
      onChange: this.onInputChange,
      readOnly: !!inputReadOnly
    });
  };

  Header.prototype.render = function render() {
    var prefixCls = this.props.prefixCls;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput()
    );
  };

  return Header;
}(_react.Component);

Header.propTypes = {
  format: _propTypes2["default"].string,
  prefixCls: _propTypes2["default"].string,
  disabledDate: _propTypes2["default"].func,
  placeholder: _propTypes2["default"].string,
  clearText: _propTypes2["default"].string,
  value: _propTypes2["default"].object,
  inputReadOnly: _propTypes2["default"].bool,
  hourOptions: _propTypes2["default"].array,
  minuteOptions: _propTypes2["default"].array,
  secondOptions: _propTypes2["default"].array,
  disabledHours: _propTypes2["default"].func,
  disabledMinutes: _propTypes2["default"].func,
  disabledSeconds: _propTypes2["default"].func,
  onChange: _propTypes2["default"].func,
  onEsc: _propTypes2["default"].func,
  allowEmpty: _propTypes2["default"].bool,
  defaultOpenValue: _propTypes2["default"].object,
  currentSelectPanel: _propTypes2["default"].string,
  focusOnOpen: _propTypes2["default"].bool,
  onKeyDown: _propTypes2["default"].func,
  clearIcon: _propTypes2["default"].node
};
Header.defaultProps = {
  inputReadOnly: false
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onInputChange = function (event) {
    var str = event.target.value;
    _this4.setState({
      str: str
    });
    var _props3 = _this4.props,
        format = _props3.format,
        hourOptions = _props3.hourOptions,
        minuteOptions = _props3.minuteOptions,
        secondOptions = _props3.secondOptions,
        disabledHours = _props3.disabledHours,
        disabledMinutes = _props3.disabledMinutes,
        disabledSeconds = _props3.disabledSeconds,
        onChange = _props3.onChange,
        allowEmpty = _props3.allowEmpty;


    if (str) {
      var originalValue = _this4.props.value;

      var value = _this4.getProtoValue().clone();
      var parsed = (0, _moment2["default"])(str, format, true);
      if (!parsed.isValid()) {
        _this4.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        _this4.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        _this4.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      _this4.setState({
        invalid: true
      });
      return;
    }

    _this4.setState({
      invalid: false
    });
  };

  this.onKeyDown = function (e) {
    var _props4 = _this4.props,
        onEsc = _props4.onEsc,
        onKeyDown = _props4.onKeyDown;

    if (e.keyCode === 27 || e.keyCode === 13) {
      onEsc();
    }

    onKeyDown(e);
  };
};

exports["default"] = Header;
module.exports = exports['default'];