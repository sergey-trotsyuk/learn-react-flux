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

### Materials
 - Webpack
   - https://webpack.github.io/docs/tutorials/getting-started/
   - http://frontender.info/packing-the-web-like-a-boss/
   - https://mistakster.github.io/fronttalks-webpack/
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
