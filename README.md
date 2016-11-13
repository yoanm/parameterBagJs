ParameterBag
============

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/?branch=master) [![Build Status](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/badges/build.png?b=master)](https://scrutinizer-ci.com/g/yoanm/parameterBagJs/build-status/master)

[![npm](https://img.shields.io/npm/v/parameterBag.svg)](https://www.npmjs.com/package/parameterBag) [![license](https://img.shields.io/npm/l/parameterBag.svg)](https://www.npmjs.com/package/parameterBag)

[![npm stat](https://nodei.co/npm/parameterBag.png)](https://www.npmjs.com/package/parameterBag)

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

## Coverage
```bash
> npm run coverage
```
Then open the `coverage/index.js.html` file in a browser

## EsLint
```bash
> npm run eslint
```

## Release History

* `1.0.0` : Initial release
* `1.1.0` : EsLint / Coverage / Scrutinizer badge
