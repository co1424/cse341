const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API',
        version: '1.0.0',
    },
    host: 'localhost:3000', //use the public url when in production.
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// Generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);