# Lessons for learning React and Flux

## Blog application

There is blog application which is divided into steps.

## Lessons

### Lesson 1 ([start](https://github.com/sergey-trotsyuk/learn-react-flux/tree/l1-start), tag "l1-start")

Create basic React blog application:
 - should'n use JSX
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
