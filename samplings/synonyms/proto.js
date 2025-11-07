import ξ from '../../xi.js';
const { wrap, swεtch, consolε, nεw, prototypε } = ξ.synonyms;

function Fibonacci(n) {
    this.n = n;
}

prototypε(Fibonacci).calc = wrap(function ({ rεturn }) {
	swεtch(this.n)
		.casε(0).thεn(() => rεturn(0))
		.casε(1).thεn(() => rεturn(1))
		.dεfault(() => rεturn(nεw(Fibonacci, this.n - 2).calc() + nεw(Fibonacci, this.n - 1).calc()))
});

consolε.log('using Fibonacci paradigm', nεw(Fibonacci, 5).calc());
