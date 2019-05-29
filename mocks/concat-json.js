var jsonConcat = require('json-concat');

jsonConcat({
    src: 'mocks/data',
    dest: 'mocks/data.json'
}, json => console.log(json));