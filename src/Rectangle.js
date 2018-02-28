class Rectangle {
    constructor ( breadth, length ){
        this.breadth = breadth;
        this.length = length;
    }
    area (){
        return this.length * this.breadth;
    }
    perimeter (){
        return 2 * (this.length + this.breadth); 
    }
}

// Instantiate 

//rectangle1.area();
//rectangle1.perimeter();

// To export more than function / object/ class
// {key: value}
//module.exports = {RectangleKey: Rectangle, SquareKey: Square}

module.exports = Rectangle