define(['react', './ex5.rt'], function (React, template) {
    'use strict';

    function createChangeHandler(key) {
        return (e) => {
            console.log(Object.keys(this.state.inputs));
            const value = e.target.value;
            console.log(`${JSON.stringify(key)} changed to ${value}`);
            const newInputs = Object.assign({}, this.state.inputs, {[key]: value});
            this.setState({inputs: newInputs});
        };
    }

    function getInitialState() {
        return {
            inputs: {
                name: 'name',
                nn: ''
            }
        }
    }

    return React.createClass({
        displayName: 'ex5',
        createChangeHandler: createChangeHandler,
        getInitialState: getInitialState,
        render: template
    });
});