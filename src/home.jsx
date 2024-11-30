import {signal} from '@preact/signals';
import {Component} from 'preact';

export default class extends Component {
    message = signal('Hello, world!');

    render() {
        return <div>{this.message}</div>;
    }
}
