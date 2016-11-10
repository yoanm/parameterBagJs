/* ****************************************************************************************************************
 * @summary Simple parameter bag module, inspired by Symfony ParameterBag
 * @description ParameterBag provide Object oriented way to store key value pair
 *
 * @example <caption>Instantiation</caption>
 * const ParameterBag = require('parameterBag');
 * var bag = new ParameterBag();
 *
 * @example <caption>Setter</caption>
 *  bag.set('key', 'value');
 *
 * @example <caption>Getter</caption
 *  var myValue = bag.get('key');
 *****************************************************************************************************************/

/**
 * @constructor
 */
function ParameterBag() {
    this.store = [];
}

/**
 * @public
 * @param {string} key
 * @param {mixed}  data
 */
ParameterBag.prototype.set = function(key, data) {
    this.store[key] = data;
};
/**
 * @public
 * @param {string} key
 * @param {mixed}  defaultValue If value is undefined for the key, defaultValue will be returned
 *
 * @returns {mixed}
 */
ParameterBag.prototype.get = function(key, defaultValue) {
    var value = this.store[key];
    if (typeof value === 'undefined') {
        return defaultValue;
    }

    return value;
};

/**
 * @private
 * @type {Array}
 */
ParameterBag.prototype.store = null;

/* Export class */
module.exports = ParameterBag;
