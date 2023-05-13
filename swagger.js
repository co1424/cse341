const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API',
        version: '1.0.0',
    },
    host: 'https://cse341-dn5l.onrender.com', //use the public url when in production.
    basePath: '/api-docs',
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// Generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);