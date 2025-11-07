import ξ from '../../xi.js';
const { cli, construct, match } = ξ;

class Fibonacci {
    constructor(n) {
	    this.n = n;
    }

    calc = ξ(function calc({ output }) {
        output(
            match(this.n)
                .on(0).apply(0)
                .on(1).apply(1)
                .fallback(() => construct(Fibonacci, this.n - 2).calc() + construct(Fibonacci, this.n - 1).calc())
        );
    });
}

cli.log('using Fibonacci class', construct(Fibonacci, 5).calc());
