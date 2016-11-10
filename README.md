ParameterBag
============

Simple parameter bag module, inspired by Symfony ParameterBag.

ParameterBag provide Object oriented way to store key value pair

## Installation
```bash
> npm install parameterBag --save
```

## Usage
```javascript
// Load
const ParameterBag = require('parameterBag');
// Instantiate
var bag = new ParameterBag();
// Set
bag.set('key', 'value');
// Get
var myValue = bag.get('key');
```
## Tests
```bash
> npm test
```

## Release History

* `1.0.0` : Initial release