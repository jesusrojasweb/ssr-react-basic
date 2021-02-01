import express from "express";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Html from "./Html";
import App from "./App";
import { ServerStyleSheet } from "styled-components";

const app = express();

const port = process.env.PORT || 3000;
app.set("host", process.env.HOST || "0.0.0.0");
app.set("trust proxy", true);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/*", async (req, res, next) => {
  const scripts = ["../vendor.js", "../client.js"];
  const sheet = new ServerStyleSheet();

  const appMarkup = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();

  const html = ReactDOMServer.renderToStaticMarkup(
    <Html children={appMarkup} scripts={scripts} css={styles} />
  );

  res.send(`<!doctype html>${html}`);
});

app.listen(port, () => console.log("Listening on localhost:" + port));
