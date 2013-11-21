![web component logo](http://i49.tinypic.com/e7nj9v.png)

# toString

A minimal Javascript component for converting anything to a string

## Installation

    $ component install javve/to-string

## Example

```js
var toString = require('to-string');

toString(undefind); // returns ""
toString(null); // returns ""
toString(9); // returns "9"
toString({ foo: "bar" }); // returns something like "[object Object]"
toString(function() {}); // returns something like "function () {}"
```

## In action

[List.js](http://listjs.com)

## License

MIT
