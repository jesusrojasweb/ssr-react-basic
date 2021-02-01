import React from "react";

const Html = ({ children, scripts, css }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Server Side Render</title>
      {css}
    </head>
    <body style={{ margin: 0 + "em" }}>
      <div id="root" dangerouslySetInnerHTML={{ __html: children }} />

      {scripts.map((item, index) => (
        <script async key={index} src={item} />
      ))}
    </body>
  </html>
);

export default Html;
