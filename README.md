# SlimJS + Babel Preset Env

## Problem

This repository demonstrates an issue when using [`slim-js`](https://github.com/slimjs/slim.js) with [`@babel/preset-env`](https://github.com/babel/babel/tree/master/packages/babel-preset-env).

Steps to Reproduce:

```
npm install
npm run build
```

After `dist/bundle.js` has been generated, open `index.html` in the browser.

The console will display an error: `Uncaught TypeError: Class constructor Slim cannot be invoked without 'new'`.

## Solution (`working` branch)

Relevant links:
- https://github.com/babel/babel-loader/issues/730#issuecomment-436304976
- https://babeljs.io/docs/en/config-files#project-wide-configuration