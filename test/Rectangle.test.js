
// To choose more than 1 function / object/ class
//var Rectangle= require('../src/Rectangle').RectangleKey

// To import Rectangle.js in order to test it
var Rectangle  = require('../src/Rectangle');


// [ describe (..) ] to group the testing type
describe.skip("To Test Rectangle's Area", function() {

    test('rect.area(1,1) should return 1', function() {
// create an instance of Rectangle called rect
        var rect = new Rectangle (1,1); 
// test using [ .toEqual() ]
        expect(rect.area()).toEqual(1);
    });

    
    test('rect.area(2,4) should return 8', function() {
        var rect = new Rectangle (2,4);
        expect(rect.area()).toEqual(8); 
        
    });


    test('rect.area(5,10) should return 50', function() {
        var react = new Rectangle (5,10);
        expect(react.area(5,10)).toEqual(50);    
    });
});

describe.skip("To test Rectangle's perimeter", function() {

    test('rect.per(1,2) should return 6 ', function() {
        var rect = new Rectangle (1,2); 
        expect(rect.perimeter(1,2)).toEqual(6);
    });

    test('rect.per(2,4) should return 12', function() {
        var rect = new Rectangle(2,4);
        expect(rect.perimeter(2,4)).toEqual(12);
    });
    
    test('rect.per(5,10) should return 30', function() {
        var rect = new Rectangle(5,10); 
        expect(rect.perimeter(5,10)).toEqual(30);
        
    });
});