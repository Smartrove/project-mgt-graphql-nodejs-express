const express = require("express");
const dotenv = require("dotenv/config");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./server/schema/schema");
const mongoose = require("mongoose");
const port = process.env.PORT;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => console.log(`server listening at port ${port}`));
