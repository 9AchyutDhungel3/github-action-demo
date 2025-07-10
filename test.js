// test.js
const test = require('tape');
const { add, subtract } = require('./index');

test('add function', function (t) {
    t.equal(add(1, 2), 3, 'should add two numbers correctly');
    t.equal(add(-1, 1), 0, 'should handle negative numbers');
    t.end();
});

test('subtract function', function (t) {
    t.equal(subtract(5, 2), 3, 'should subtract two numbers correctly');
    t.equal(subtract(2, 5), -3, 'should handle negative results');
    t.end();
});