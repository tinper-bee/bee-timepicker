
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimePicker from '../src';
import moment from 'moment';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 基本时间选择
 * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
 *
 */
class Demo1 extends Component {

    onChange(time,timeString){
        console.log(time, timeString);
    }
    render() {
        return (
            <div>
                <TimePicker placeholder="选择时间" onChange={this.onChange.bind(this)} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </div>
        )
    }
}/**
 *
 * @title 12小时制时间选择
 * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
 *
 */


class Demo2 extends Component {

    onChange(time,timeString){
        console.log(time, timeString);
    }
    render() {
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        return (
            <div>
                <TimePicker
                    format={format}
                    showSecond={false}
                    defaultValue={now}
                    placeholder="选择时间"
                    onChange={this.onChange.bind(this)}
                    use12Hours
                />
            </div>
        )
    }
}/**
 *
 * @title 限定时间
 * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。
 *
 */

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';

class Demo3 extends Component {

    onChange(value) {
        console.log(value && value.format(str));
    }

    generateOptions(length, excludedOptions) {
        const arr = [];
        for (let value = 0; value < length; value++) {
            if (excludedOptions.indexOf(value) < 0) {
                arr.push(value);
            }
        }
        return arr;
    }

    disabledHours() {
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
    }

    disabledMinutes(h) {
        switch (h) {
            case 9:
                return this.generateOptions(60, [30]);
            case 21:
                return this.generateOptions(60, [0]);
            default:
                return this.generateOptions(60, [0, 30]);
        }
    }

    disabledSeconds(h, m) {
        return [h + m % 60];
    }

    render() {
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        return (
            <div>
                <TimePicker
                    showSecond={showSecond}
                    defaultValue={now}
                    className="xxx"
                    onChange={this.onChange.bind(this)}
                    disabledHours={this.disabledHours}
                    disabledMinutes={this.disabledMinutes.bind(this)}
                    disabledSeconds={this.disabledSeconds.bind(this)}
                />
            </div>
        )
    }
}var DemoArray = [{"example":<Demo1 />,"title":" 基本时间选择","code":"/**\n *\n * @title 基本时间选择\n * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\nclass Demo1 extends Component {\n\n    onChange(time,timeString){\n        console.log(time, timeString);\n    }\n    render() {\n        return (\n            <div>\n                <TimePicker placeholder=\"选择时间\" onChange={this.onChange.bind(this)} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />\n            </div>\n        )\n    }\n}","desc":" 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo2 />,"title":" 12小时制时间选择","code":"/**\n *\n * @title 12小时制时间选择\n * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\n\nclass Demo2 extends Component {\n\n    onChange(time,timeString){\n        console.log(time, timeString);\n    }\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <TimePicker\n                    format={format}\n                    showSecond={false}\n                    defaultValue={now}\n                    placeholder=\"选择时间\"\n                    onChange={this.onChange.bind(this)}\n                    use12Hours\n                />\n            </div>\n        )\n    }\n}","desc":" 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"},{"example":<Demo3 />,"title":" 限定时间","code":"/**\n *\n * @title 限定时间\n * @description 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。\n *\n */\n\nconst showSecond = true;\nconst str = showSecond ? 'HH:mm:ss' : 'HH:mm';\n\nclass Demo3 extends Component {\n\n    onChange(value) {\n        console.log(value && value.format(str));\n    }\n\n    generateOptions(length, excludedOptions) {\n        const arr = [];\n        for (let value = 0; value < length; value++) {\n            if (excludedOptions.indexOf(value) < 0) {\n                arr.push(value);\n            }\n        }\n        return arr;\n    }\n\n    disabledHours() {\n        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];\n    }\n\n    disabledMinutes(h) {\n        switch (h) {\n            case 9:\n                return this.generateOptions(60, [30]);\n            case 21:\n                return this.generateOptions(60, [0]);\n            default:\n                return this.generateOptions(60, [0, 30]);\n        }\n    }\n\n    disabledSeconds(h, m) {\n        return [h + m % 60];\n    }\n\n    render() {\n        const format = 'h:mm a';\n        const now = moment().hour(0).minute(0);\n        return (\n            <div>\n                <TimePicker\n                    showSecond={showSecond}\n                    defaultValue={now}\n                    className=\"xxx\"\n                    onChange={this.onChange.bind(this)}\n                    disabledHours={this.disabledHours}\n                    disabledMinutes={this.disabledMinutes.bind(this)}\n                    disabledSeconds={this.disabledSeconds.bind(this)}\n                />\n            </div>\n        )\n    }\n}","desc":" 点击 TimePicker，然后可以在浮层中选择或者输入某一时间。"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
