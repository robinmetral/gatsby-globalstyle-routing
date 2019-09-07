# Gatsby routing ignores styled-component global styles

This repo reproduces a Gatsby + styled-components bug I'm running into in both development and production.

The site renders correctly at first, but when routing the styled-components global styles (created with the `createGlobalStyle` API) are ignored.

This naturally causes styling bugs as font styles, for example, are conventionally declared in global styles.

## Reproducing

:bug: Demo: https://gatsby-globalstyle-routing.netlify.com/

The expected behavior is that the page background should remain `forestgreen` on routing. Navigate between the `index` and `second` pages and you'll see the global styles disappearing.

**To reproduce locally:**

- Clone the repo
- `yarn`
- `yarn develop`
- Test the behavior as described above on http://localhost:8000


## Config

This example has been configures according to the [Using styled-components docs](https://www.gatsbyjs.org/docs/styled-components/).

**Dependencies:**

Latest versions of Gatsby as well as the three required dependencies (see [package.json](package.json#L7-L24)):

- `"styled-components": "^5.0.0-beta.8"`
- `"gatsby-plugin-styled-components": "^3.1.4"`
- `"babel-plugin-styled-components": "^1.10.6"`

**Gatsby config:**

`gatsby-plugin-styled-components` is correctly added to `gatsby-config.js` plugins (see [gatsby-config.js](gatsby-config.js#L11))

## Structure

Both pages ([`IndexPage`](src/pages/index.js) and [`SecondPage`](src/pages/second.js)) wrap their children in the [`Layout`](src/components/Layout.js) component.

The `Layout` component imports global styles from [`GlobalStyle.js`](src/components/styled/GlobalStyle.js) (using the styled-components `createGlobalStyle` API) and adds them to the component tree, just like in the [using styled-components example](https://github.com/gatsbyjs/gatsby/blob/master/examples/using-styled-components/src/pages/index.js).
