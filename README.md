# Short DOM

Set of shortened functions and utilities to allow much less code writing when interacting with the DOM.

You can either require specific functions:
```javascript
var qs = require('short-dom').qs
window.onload = function () {
  qs('#my-div-id');
}
```

Or invoking the return from your require will just put all the functions in the window/global scope
```javascript
var shortDom = require('short-dom')();
window.onload = function () {
  qs('#my-div-id');
}
```

|Native|short-dom| 
|---------|------| 
|document.querySelector()|qs()| 
|document.querySelectorAll()|qsa()| 
|document.getElementById()|gid()|
|document.getElementsByClassName()|gclass()|
|document.getElementByTagName()|gtag()|