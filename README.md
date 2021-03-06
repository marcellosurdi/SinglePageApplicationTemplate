# Single page application template
![GitHub package.json version](https://img.shields.io/github/package-json/v/marcellosurdi/SinglePageApplicationTemplate)

Single page application (SPA) is a dependency-free template using predefined CSS styles, page transitions, sidenav with multilevel menu, icons, toast messages, overlay and translations management. Page transitions are inspired by Christophe Coenraets's [PageSlider](https://github.com/ccoenraets/PageSlider).

## Usage
Make sure that you have [Node.js](http://nodejs.org/) installed, then:
1. Fork and clone the [GitHub repository](https://github.com/marcellosurdi/SinglePageApplicationTemplate).
2. From the command line go to the local SinglePageApplicationTemplate folder.
3. Run `npm install` and wait for the necessary modules installation. [Webpack](https://webpack.js.org/guides/installation/#root) will be installed, look at the other dev dependencies in `package.json` file.

### Development server
```
npm run dev
```
Webpack will open the development server at localhost:3001 in Chrome.

### Production build
```
npm run build
```
Webpack will build compiled files in `dist` folder.

### JSDoc
```
npm run jsdoc
```
After above command execution you will be able to see JSDoc documentation in `docs` folder.

That's it!

## Links
1. [Online demo](https://www.marcellosurdi.name/demo/single-page-application-template/index.html)
2. [Source code documentation](https://www.marcellosurdi.name/docs/single-page-application-template/)
