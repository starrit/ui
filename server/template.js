export default ({ body, title, initialState, cssBundle,jsBundle  }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title}</title>
        <link rel="stylesheet" href="/${cssBundle}" />
      </head>
      
      <body>
        <div id="react-root">${body}</div>
      </body>
      
      <script src="/${jsBundle}"></script>
    </html>
  `;
};
