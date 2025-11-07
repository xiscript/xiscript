import ξ from '../../xi.js';
const { consolε, nεw, swεtch, wrap } = ξ.synonyms;

class Fibonacci {
    constructor(n) {
	    this.n = n;
    }

    calc = wrap(function calc({ rεturn }) {
        rεturn(
            swεtch(this.n)
                .casε(0).thεn(() => 0)
                .casε(1).thεn(() => 1)
                .dεfault(() => nεw(Fibonacci, this.n - 2).calc() + nεw(Fibonacci, this.n - 1).calc())
        );
    });
}

consolε.log('using Fibonacci class', nεw(Fibonacci, 5).calc());
