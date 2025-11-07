import ξ from '../../xi.js';
const { wrap, cli } = ξ;

const fibonacci = wrap(({ output }, n) => {
    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
        const c = a;
        a = b;
        b = c + b;
    }
    output(a);
});

cli.log('using fibonacci function', fibonacci(5));
