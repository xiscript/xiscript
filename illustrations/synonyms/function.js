import ξ from '../../xi.js';
const { wrap, consolε } = ξ.synonyms;

const fibonacci = wrap(({ rεturn }, n) => {
    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
        const c = a;
        a = b;
        b = c + b;
    }
    rεturn(a);
});

consolε.log('using fibonacci function', fibonacci(5));
