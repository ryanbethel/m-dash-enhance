import { getStyles } from '@enhance/arc-plugin-styles'
export default function Head() {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Enhance Starter Project</title>
        <link rel="icon" href="/_public/favicon.svg" />
      ${/* getStyles.linkTag() */ ''}
        <meta
          name="description"
          content="The HTML first full stack web framework."
        />
      </head>
      <body class="bg-gray-1"></body>
    </html>
  `;
}
