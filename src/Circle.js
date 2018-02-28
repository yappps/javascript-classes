class Circle {
    constructor (radius){
        this.radius = radius;
    }

    area (){
        var area = Math.PI * this.radius ** 2
        return parseFloat(area.toFixed(1));
    }
    perimeter (){
        var Perimeter = 2 * Math.PI * this.radius;
        return parseFloat(Perimeter.toFixed(1));
    }
}


/*
1. parseFloat() = parses (analyse a string and returns a floating point number. 
    If the string's first character is not a [0-9] it will ignore the rest of the char in the string and return NaN )
    eg. e22342 -> NaN
    If it encounters a character other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent, it returns the value up to that point and ignores that character and all succeeding characters. Leading and trailing spaces are allowed. 
    eg. 123rasfdf1343 -> 123
      
*/

// need to put at the end???
module.exports = Circle;