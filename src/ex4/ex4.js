define(['react', './ex4.rt'], function (React, template) {
    'use strict';

    function createChangeHandler(key) {
        return (e) => {
            const value = e.target.value;
            const newLocation = Object.assign({}, this.state.location, {[key]: value});
            this.setState({location: newLocation});
            console.log('new location: ' + JSON.stringify(newLocation));
        };
    }

    function getInitialState() {
        return {
            location: {
                lat: 0,
                long: 0
            }
        }
    }

    return React.createClass({
        displayName: 'ex4',
        createChangeHandler: createChangeHandler,
        getInitialState: getInitialState,
        render: template
    });
});