import React, { Component } from 'react';
import TimePicker from 'rc-time-picker';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};
class Timepicker extends Component {

    render() {
        let props = this.props;
        return (
            <TimePicker {...props} />
        )
    }
};
Timepicker.propTypes = propTypes;
Timepicker.defaultProps = defaultProps;
export default Timepicker;