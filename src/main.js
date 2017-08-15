requirejs.config({
//    baseUrl: '/',
    paths: {
        lodash: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
        react: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-with-addons',
        reactDOM: '//cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'}
    },
    map: {
        '*': {
            'react/addons': 'react'
        }
    }
});

// requirejs(['react', 'reactDOM', './hello'], function (React, ReactDOM, hello) {
//     'use strict';
//     ReactDOM.render(React.createElement(hello), document.getElementById('container'));
// });

// requirejs(['react', 'reactDOM', './ex1/ex1'], function (React, ReactDOM, ex1) {
//     'use strict';
//     ReactDOM.render(React.createElement(ex1), document.getElementById('container'));
// });

// requirejs(['react', 'reactDOM', './ex2/ex2'], function (React, ReactDOM, form) {
//     'use strict';
//     ReactDOM.render(React.createElement(form), document.getElementById('container'));
// });

// requirejs(['react', 'reactDOM', './ex3/ex3'], function (React, ReactDOM, form) {
//     'use strict';
//     ReactDOM.render(React.createElement(form), document.getElementById('container'));
// });

// requirejs(['react', 'reactDOM', './ex4/ex4'], function (React, ReactDOM, form) {
//     'use strict';
//     ReactDOM.render(React.createElement(form), document.getElementById('container'));
// });

// requirejs(['react', 'reactDOM', './ex5/ex5'], function (React, ReactDOM, dynamicForm) {
//     'use strict';
//     ReactDOM.render(React.createElement(dynamicForm), document.getElementById('container'));
// });

requirejs(['react', 'reactDOM', './ex6/ex6'], function (React, ReactDOM, selectPanel) {
    'use strict';
    ReactDOM.render(React.createElement(selectPanel), document.getElementById('container'));
});

