define(['react', './ex2.rt'], function (React, template) {
    'use strict';

    function onInputChange(e) {
        this.setState({name: e.target.value});
    }

    function getInitialState() {
        return {name: ''}
    }

    return React.createClass({
        displayName: 'ex2',
        onInputChange: onInputChange,
        getInitialState: getInitialState,
        render: template
    });
});