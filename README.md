# SlimJS + Babel Preset Env

This repository demonstrates an issue when using [`slim-js`](https://github.com/slimjs/slim.js) with [`@babel/preset-env`](https://github.com/babel/babel/tree/master/packages/babel-preset-env).

Steps to Reproduce:

```
npm install
npm run build
```

After `dist/bundle.js` has been generated, open `index.html` in the browser.

The console will display an error: `Uncaught TypeError: Class constructor Slim cannot be invoked without 'new'`.