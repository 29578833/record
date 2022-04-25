
var num = 1;
function A() {
    var num1 = 1;
    var num2 = 2;
    var num3 = 3;
    function B() {
        var num4 = 4;
        console.log(num4)
        console.log(num1)
        console.log(num3)
    }
    return B
}
const fn1 = A();
fn1();