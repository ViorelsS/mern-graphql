const express = require("express");
const colors = require("colors");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("../server/schema/schema");
const { graphql } = require("graphql");
const app = express();

//Connect to DataBase
connectDB();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        // graphiql: process.env.NODE_ENV === "development",
        graphiql: true,
    })
);
app.listen(port, () => console.log(`Server running on port ${port}!`));
