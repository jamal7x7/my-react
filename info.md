# The basic concept React

- reconcilliation
- rendering
- virtualDOM
- diffing Algorithm

React components vs React elements vs Components instances

a react components returns React elements

```jsx
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>This is a paragraph</p>
    </div>
  )
}
```

App return an Object `console.log(App)`

```js
{
    $$typeof: Symbol(react.element),
    key: null,
    props: { children: [Function] },
    ref: null,
    type: "div",
}
```
