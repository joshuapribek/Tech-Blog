const path = require("path");
const express = require("express");
const expresshandlebars = require("express-handlebars");
const session = require("express-session");
const sequelizestore = require("connect-session-sequelize")(session.store);

const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
