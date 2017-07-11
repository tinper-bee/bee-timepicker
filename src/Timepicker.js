import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import TimePicker from 'rc-time-picker';
const propTypes = {};
const defaultProps = {};
class Timepicker extends Component {

    render() {
        var props = this.props;
        return (
            <TimePicker {...props} />
        )
    }
};
Timepicker.propTypes = propTypes;
Timepicker.defaultProps = defaultProps;
export default Timepicker;