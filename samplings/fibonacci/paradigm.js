import ξ from '../../xi.js';
const { wrap, paradigm, cli, construct, match } = ξ;

function Fibonacci(n) {
    this.n = n;
}

paradigm(Fibonacci).calc = wrap(function ({ output }) {
	match(this.n)
		.cond(0).apply(() => output(0))
		.cond(1).apply(() => output(1))
		.fallback(() => output(construct(Fibonacci, this.n - 2).calc() + construct(Fibonacci, this.n - 1).calc()))
});

cli.log('using Fibonacci paradigm', construct(Fibonacci, 5).calc());
