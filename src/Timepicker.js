import React, { Component } from 'react';
import TimePicker from './rc/index';
import PropTypes from 'prop-types';
import moment from 'moment';

const propTypes = {};
const defaultProps = {
    focusOnOpen:true,
    clearIcon:<i className="uf uf-close-c" />,
    onKeyDown:()=>{}
};
class Timepicker extends Component {

    constructor(props){
        super(props);
        this.state={
            value:props.value
        }
    }

    componentWillReceiveProps(nextProps){
        if('value' in nextProps){
            let value = nextProps.value;
            if(value){
                if(value.format){
                    
                }else{
                    value = moment(`${moment().format('YYYY-MM-DD')} ${value}`)
                }
            }else{
                value=null;
            }
            this.setState({
                value
            })
        }
    }

    render() {
        let {value,...other} = this.props;
        
        return (
            <TimePicker  prefixCls='u-time-picker' value={this.state.value}  {...other} />
        )
    }
};
Timepicker.propTypes = propTypes;
Timepicker.defaultProps = defaultProps;
export default Timepicker;