const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');
const cors = require('cors')

const app = express();

app.use(cors())

app.use('/graphql', expressGraphQL({
    schema:schema,
    graphiql:true
}));


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
