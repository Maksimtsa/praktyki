function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b == 0) {
        return "błąd";
    }
    else {
        return a / b;
    }
}

exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
