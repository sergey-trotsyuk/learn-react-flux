# Lessons for learning React and Flux

## Blog application

There is blog application which is divided into steps.

## Lessons

### Lesson 1 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l1-start), tag "l1-start")

Create basic React blog application:
 - shouldn't use JSX
 - should have components: App, BlogItemList, BlogItem, Button
 - should have toggle button which should change font weight of item title ("Mark as Unread" / "Mark as Read")
 - should generate HTML:

```html
<section>
  <h1>Blog title</h1>
  <article>
      <h1>Blog item title 1</h1>
      <button>Mark as Read</button>
      <p>Item text 1</p>
  </article>
  <article>
      <h1>Blog item title 2</h1>
      <button>Mark as Unread</button>
      <p>Item text 1</p>
  </article>
</section>
```

### Materials
 - Introduction
    - https://mieta.gitbooks.io/developing-a-react-age/content/glava_1_vvedenie_v_reactjs.html
    - https://habrahabr.ru/post/248799/
    - http://jsraccoon.ru/react-intro
    - https://www.ibm.com/developerworks/ru/library/wa-react-intro/
 - Component as function - https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
 - Component life cycle:
   - https://mieta.gitbooks.io/developing-a-react-age/content/glava_3_zhiznennii_tsikl_komponenta_reactjs.html
   - https://facebook.github.io/react/docs/component-specs.html
 - JSX to JS Online - https://babeljs.io/repl/#?evaluate=false&lineWrap=false&presets=es2015%2Creact
 - React component example without JSX - https://github.com/mopsek/reactjs-progressive-learning-app/blob/1a77dc6d5afd80bf1f7d4f21fb64372a9d3f8a19/dist/bundle.js#L201

### Lesson 2 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l2-start), tag "l2-start")

Apply JSX for application:
 - should use "src" dir for all sources and "dist" for build application
 - should use minimal Webpack configuration
 - should use Webpack dev server
 - rewrite components with JSX and ES6
 - JSX files should have ".js" extensions
 - build application should contain: index.html, main.js, main.css

Intermediate tags: l2-done-webpack, l2-done-es6-jsx, l2-done-webpack-dev-server

### Materials
 - Webpack
   - https://webpack.github.io/docs/tutorials/getting-started/
   - http://frontender.info/packing-the-web-like-a-boss/
   - https://habrahabr.ru/post/265801/
   - https://learn.javascript.ru/screencast/webpack
   - https://webpack.github.io/docs/webpack-dev-server.html
   - https://habrahabr.ru/company/Voximplant/blog/270593/
 - Webpack loaders
  - https://webpack.github.io/docs/stylesheets.html
  - https://github.com/babel/babel-loader
 - React & ES6
   - https://habrahabr.ru/post/262183/
   - https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   - https://babeljs.io/blog/2015/06/07/react-on-es6-plus
 - JSX
   - https://facebook.github.io/react/docs/jsx-in-depth.html
   - https://facebook.github.io/react/docs/jsx-gotchas.html
   - https://facebook.github.io/react/tips/self-closing-tag.html

### Lesson 3 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l3-start), tag "l3-start")

Add jQuery plugin and CSS Modules:
 - should use [jQuery UI Tooltip](https://www.npmjs.com/package/jquery-ui) for button titles ([demo](https://jqueryui.com/tooltip/))
 - should use jquery-ui@1.10.4 and jquery@1.12.4
 - should use refs for work with DOM
 - should use CSS Modules for all CSS files

### Materials
 - jQuery Tooltip
   - https://github.com/ianmcburnie/jquery-tooltip
   - http://swip.codylindley.com/tooltipDemo.html
 - React and DOM
   - https://facebook.github.io/react/docs/working-with-the-browser.html
   - https://facebook.github.io/react/docs/more-about-refs.html
   - https://egghead.io/lessons/react-using-react-with-the-fullcalendar-jquery-plugin
 - CSS Modules
   - https://habrahabr.ru/post/276417/
   - https://github.com/css-modules/css-modules
   - https://github.com/css-modules/webpack-demo
   - http://glenmaddern.com/articles/css-modules

### Lesson 4 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l4-start), tag "l4-start")

Add Flux architecture and blog item view:
 - should use store for blog items
 - should use actions and action creators
 - should use dispatcher module
 - should use classic Facebook utils
 - should change URL (after #) for blog item view

### Materials
 - Flux
   - https://habrahabr.ru/post/246959/
   - https://habrahabr.ru/post/249279/
   - https://habrahabr.ru/company/hexlet/blog/268249/
   - https://facebook.github.io/flux/
 - Facebook Utils
   - https://github.com/facebook/flux
 - React Router
   - https://github.com/reactjs/react-router
   - https://maxfarseer.gitbooks.io/react-router-course-ru/content/
 - Examples
   - https://github.com/facebook/flux/tree/master/examples/flux-todomvc
   - https://github.com/facebook/flux/tree/master/examples/flux-chat
   - https://github.com/facebook/flux/tree/master/examples/flux-utils-todomvc

### Lesson 5 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l5-start), tag "l5-start")

Replace Flux with Reflux:
 - should have same structure except removed dispatcher layer

### Materials
 - Reflux
   - https://habrahabr.ru/post/250581/
   - https://github.com/reflux/refluxjs#comparing-refluxjs-with-facebook-flux
   - https://github.com/reflux/refluxjs
 - Examples
   - https://github.com/reflux/refluxjs-todo
   - https://github.com/echenley/react-news
   - https://github.com/akornatskyy/sample-blog-react

### Lesson 6 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l6-start), tag "l6-start")

Replace Reflux with Redux:
 - should use hot module replacement with webpack dev server

### Materials
 - Redux
   - https://medium.com/russian/a-cartoon-intro-to-redux-e2108896f7e6
   - https://maxfarseer.gitbooks.io/redux-course-ru/content/
   - https://toster.ru/q/270962
   - http://redux.js.org/
   - https://github.com/reactjs/redux
   - https://github.com/rajdee/redux-in-russian - Не официальная документация на русском
 - HMR (Hot Module Replacement)
   - https://maxfarseer.gitbooks.io/redux-course-ru/content/es2015,_react_hmr.html
   - https://webpack.github.io/docs/hot-module-replacement.html
 - Examples
   - http://redux.js.org/docs/basics/ExampleTodoList.html
   - https://github.com/reactjs/redux/tree/master/examples
