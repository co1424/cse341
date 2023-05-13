const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API',
    },
    host: 'https://cse341-dn5l.onrender.com', //use the public url when in production.
    schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];


// Generates swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);