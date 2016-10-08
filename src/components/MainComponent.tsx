/// <reference path="../../typings/index.d.ts" />

import * as React  from 'react';
import * as ReactDOM from 'react-dom';

export class MainComponent extends React.Component<{}, {}> {

    public render() {
        return (
            <div>
                <p>Lorem ipsum</p>
            </div>
        );
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));
