/* globals describe, it */
const ParameterBag = require('../index');
const expect = require('chai').expect;

describe('ParameterBag', function() {
    it('is loadable', function() {
        var bag = new ParameterBag();
        expect(bag).to.be.an.instanceof(ParameterBag);
        expect(bag).to.respondTo('get');
        expect(bag).to.respondTo('set');
    });

    it('can store data', function() {
        var bag = new ParameterBag();
        var testKey = 'key';
        var testValue = 'test';
        bag.set(testKey, testValue);
        expect(bag.get(testKey)).to.equal(testValue);
    });

    it('have default value for undefined key', function() {
        var bag = new ParameterBag();
        var testKey = 'key';
        var testValue = 'test';
        var defaultValue = 'my default value';
        bag.set('_test_', testValue);
        expect(bag.get(testKey)).to.be.undefined;
        expect(bag.get(testKey, defaultValue)).to.equal(defaultValue);
    });

    it('skip default value for defined key', function() {
        var bag = new ParameterBag();
        var testKey = 'key';
        var testValue = 'test';
        var defaultValue = 'my default value';
        bag.set(testKey, testValue);
        expect(bag.get(testKey, defaultValue)).to.equal(testValue);
    });
});
