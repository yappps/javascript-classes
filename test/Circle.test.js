// To import Circle.js in order to test it
var Circle = require('../src/Circle');

/*          GOAL
1.  Need to round a number to 1 decimal place 
2. verify the area (1,2,3)
3. verify the circumference
*/

describe("To test Circle's area", function() {
    test.skip('cir(1) should return 3.141592653589793', function() {
        var cir = new Circle(1); 
        expect(cir.area(1)).toEqual(3.141592653589793 )
    });

    test('cir(1) should return 3.1', function() {
        var cir = new Circle (1); 
        expect(cir.area(1)).toEqual(3.1);
    }); 

    test('cir(2) should return 12.6', function() {
        var cir = new Circle (2); 
        expect(cir.area(2)).toEqual(12.6);
    });

    test('cir(3) should return 28.3', function() {
        var cir = new Circle (3); 
        expect(cir.area(3)).toEqual(28.3);
    });
});

describe("To test Circle's perimeter", function() {
    
    test('cir(1) should return 3.1', function() {
        var cir = new Circle (1); 
        expect(cir.perimeter(1)).toEqual(6.3);
    }); 

    test('cir(2) should return 12.6', function() {
        var cir = new Circle (2); 
        expect(cir.perimeter(2)).toEqual(12.6);
    });

    test('cir(3) should return 18.8', function() {
        var cir = new Circle (3); 
        expect(cir.perimeter(3)).toEqual(18.8);
    });
});
