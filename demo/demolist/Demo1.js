/**
 *
 * @title 基本时间选择
 * @description 点击 Timepicker，然后可以在浮层中选择或者输入某一时间。
 *
 */



import React, { Component } from 'react';
import Timepicker from '../../src';
import moment from 'moment';

class Demo1 extends Component {

    onChange(time,timeString){
        console.log(time, timeString);
    }
    render() {
        return (
            <div>
                <Timepicker placeholder="选择时间" onChange={this.onChange.bind(this)} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
        )
    }
}


export default Demo1;