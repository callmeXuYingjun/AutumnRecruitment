function Point(x, y) {
    this.x = x;
    this.y = y;
    this.toString1 = function () {
        return '(' + this.x + ', ' + this.y + ')1111';
    }
}
Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
console.log(p.toString1())
console.log(p.toString())
console.log(p)