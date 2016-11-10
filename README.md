ParameterBag
============

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/build.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/build-status/master)
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
