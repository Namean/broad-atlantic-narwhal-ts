

### window.onload is not a function
https://stackoverflow.com/questions/18369255/window-onload-not-working-for-very-simple-page


You are not assigning your function to window.onload, you are calling your function, then assigning the result to window.onload

Replace window.onload = removeQuestions(); with window.onload = removeQuestions;

The browser expects a callback function to be in onload, so that it can call it whenever the window is loaded.

`window.onload = removeQuestions();` is equivalent to

```js
var result = removeQuestions(); // undefined, the function does not return anything
window.onload = result;
```

https://github.com/Namean/broad-atlantic-narwhal-ts

### mdn fetch
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch