define(['react', './ex3.rt'], function (React, template) {
    'use strict';

    function onInputChange(e) {
        this.setState({name: e.target.value});
    }

    function getInitialState() {
        return {name: ''}
    }

    function componentWillMount() {
        const url = new URL(window.location.href);
        const name = url.searchParams.get('name');
        this.setState({name: name});
    }

    return React.createClass({
        displayName: 'ex3',
        onInputChange: onInputChange,
        getInitialState: getInitialState,
        componentWillMount: componentWillMount,
        render: template
    });
});