import ξ from '../../xi.js';
const { fεnction, consolε } = ξ;

const fibonacci = fεnction(({ rεturn }, n) => {
    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
        const c = a;
        a = b;
        b = c + b;
    }
    rεturn(a);
});

consolε.log(fibonacci(5));
