// Function in 'file.js'
function Foo() {
    this.x = 1;
    this.y = 2;
}
Foo.prototype.set = function () {
    return this.x + this.y;
};
// export { Foo };
module.exports = {
    Foo,
}