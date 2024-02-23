// const express = require("express");
import dotenv from "dotenv";
import express, { Application } from "express";
import router from "./router/router";
import path from "path";
dotenv.config({
  path: path.join(__dirname, "../config/.env.development"),
});
const app: Application = express();
const port = process.env.PORT ? process.env.PORT : "undefined";

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/", router);
app.use("*", router);

app.listen(port, () => {
  const hostname = process.env.HOST ? process.env.HOST : "undefined";
  console.info(`Server running at http://${hostname}:${port}/`);
});
