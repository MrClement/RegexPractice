var expect = require('chai').expect;
var matches = require('../index');
var fs = require('fs');

describe('"Good" tests', function() {
    var goodFile = fs.readFileSync('good.txt', 'utf8');
    var goodLines = goodFile.split('\n');
    goodLines.forEach(function(line) {
        if(line != '') {
                it('Your regex should match ' + line, function() {
                expect(matches(line)).to.be.true;
            });
        }
    });
});

describe('"Bad" tests', function() {
    var badFile = fs.readFileSync('bad.txt', 'utf8');
    var badLines = badFile.split('\n');
    badLines.forEach(function(line) {
        if(line != '') {
                it('Your regex should not match ' + line, function() {
                expect(matches(line)).to.be.false;
            });
        }
    });
});
