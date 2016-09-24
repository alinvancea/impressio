/// <reference path="../../typings/index.d.ts" />

import React = require('react');
import ReactDOM = require('react-dom');

const root: HTMLElement = document.getElementById('app');

module MainComponent {
    export interface Props {

    }
}

class MainComponent extends React.Component<MainComponent.Props, any> {
    constructor(props: MainComponent.Props) {
        super(props);
    }

    public render() {
        return (
            <div className='Test'>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, root);

export = MainComponent;
